import { readFileSync } from "fs"
import path from "path"
import { QuartzTransformerPlugin } from "../types"
import rehypePrettyCode, { Options as CodeOptions, Theme as CodeTheme } from "rehype-pretty-code"
// @noErrors
import { getHighlighter } from "shikiji"

interface Theme extends Record<string, CodeTheme> {
  light: CodeTheme
  dark: CodeTheme
}

interface Options {
  theme?: Theme
  keepBackground?: boolean
}

const defaultOptions: Options = {
  theme: {
    light: "github-light",
    dark: "github-dark",
  },
  keepBackground: false,
}

// Load the theme object from a file, a network request, or anywhere
const tokyoNightDefault = JSON.parse(
  readFileSync(
    path.join(process.cwd(), "./quartz/plugins/transformers/themes/tokyo-night.json"),
  ).toString(),
)
const tokyoNightStorm = JSON.parse(
  readFileSync(
    path.join(process.cwd(), "./quartz/plugins/transformers/themes/tokyo-night-storm.json"),
  ).toString(),
)
const tokyoNightLight = JSON.parse(
  readFileSync(
    path.join(process.cwd(), "./quartz/plugins/transformers/themes/tokyo-night-light.json"),
  ).toString(),
)

const highlighter = await getHighlighter({
  themes: [tokyoNightDefault, tokyoNightStorm, tokyoNightLight],
})

const tokyoNight = highlighter.getTheme(tokyoNightDefault)
const tokyoStorm = highlighter.getTheme(tokyoNightStorm)
const tokyoLight = highlighter.getTheme(tokyoNightLight)

export const SyntaxHighlighting: QuartzTransformerPlugin<Options> = (
  userOpts?: Partial<Options>,
) => {
  const opts: Partial<CodeOptions> = { ...defaultOptions, ...userOpts }

  return {
    name: "SyntaxHighlighting",
    htmlPlugins() {
      return [
        [
          rehypePrettyCode,
          {
            keepBackground: true,
            theme: {
              dark: tokyoStorm,
              light: tokyoLight,
            },
          } satisfies Partial<CodeOptions>,
          ,
          opts,
        ],
      ]
    },
  }
}
