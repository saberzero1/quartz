import fs from "fs"
import { Repository } from "@napi-rs/simple-git"
import { QuartzTransformerPlugin } from "../types"
import chalk from "chalk"
import path from "path"

export interface Options {
  priority: ("frontmatter" | "git" | "filesystem")[]
}

const defaultOptions: Options = {
  priority: ["frontmatter", "git", "filesystem"],
}

function coerceDate(fp: string, d: any): Date {
  const dt = new Date(d)
  const invalidDate = isNaN(dt.getTime()) || dt.getTime() === 0
  if (invalidDate && d !== undefined) {
    console.log(
      chalk.yellow(
        `\nWarning: found invalid date "${d}" in \`${fp}\`. Supported formats: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format`,
      ),
    )
  }

  return invalidDate ? new Date() : dt
}

type MaybeDate = undefined | string | number
export const CreatedModifiedDate: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "CreatedModifiedDate",
    markdownPlugins(ctx) {
      return [
        () => {
          let repo: Repository | undefined = undefined
          let repositoryWorkdir: string
          if (opts.priority.includes("git")) {
            try {
              repo = Repository.discover(ctx.argv.directory)
              repositoryWorkdir = repo.workdir() ?? ctx.argv.directory
            } catch (e) {
              console.log(
                chalk.yellow(`\nWarning: couldn't find git repository for ${ctx.argv.directory}`),
              )
            }
          }

          return async (_tree, file) => {
            let created: MaybeDate = undefined
            let modified: MaybeDate = undefined
            let published: MaybeDate = undefined

            const fp = file.data.relativePath!
            const fullFp = file.data.filePath!
            for (const source of opts.priority) {
              if (source === "filesystem") {
                const st = await fs.promises.stat(fullFp)
                created ||= st.birthtimeMs
                modified ||= st.mtimeMs
              } else if (source === "frontmatter" && file.data.frontmatter) {
                created ||= file.data.frontmatter.created as MaybeDate
                modified ||= file.data.frontmatter.modified as MaybeDate
                published ||= file.data.frontmatter.published as MaybeDate
              } else if (source === "git" && repo) {
                try {
                  const relativePath = path.relative(repositoryWorkdir, fullFp)
                  modified ||= await repo.getFileLatestModifiedDateAsync(relativePath)
                } catch {
                  console.log(
                    chalk.yellow(
                      `\nWarning: ${file.data.filePath!} isn't yet tracked by git, dates will be inaccurate`,
                    ),
                  )
                }
              }
            }

            file.data.dates = {
              created: coerceDate(fp, created),
              modified: coerceDate(fp, modified),
              published: coerceDate(fp, published),
            }
          }
        },
      ]
    },
  }
}

// Function to parse "dddd, MMMM Do YYYY, h:mm:ss a" to a Date object
function parseMomentTimestamp(input: string): Date {
  const [weekday, monthDayYear, time] = input.split(", ")
  const [month, dayWithSuffix, year] = monthDayYear.split(" ")
  const [hour, minute, secondMeridiem] = time.split(":")
  const [second, meridiem] = secondMeridiem.split(" ")

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const monthIndex = months.indexOf(month)
  const day = parseInt(dayWithSuffix.replace(/\D/g, ""), 10)
  let hour24 = parseInt(hour, 10)

  if (meridiem.toLowerCase() === "pm" && hour24 < 12) {
    hour24 += 12
  } else if (meridiem.toLowerCase() === "am" && hour24 === 12) {
    hour24 = 0
  }

  return new Date(parseInt(year), monthIndex, day, hour24, parseInt(minute), parseInt(second))
}

function formatToISOString(date: Date): string {
  return date.toISOString()
}

declare module "vfile" {
  interface DataMap {
    dates: {
      created: Date
      modified: Date
      published: Date
    }
  }
}
