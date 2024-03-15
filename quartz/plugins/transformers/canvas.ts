import remarkGfm from "remark-gfm"
import smartypants from "remark-smartypants"
import { QuartzTransformerPlugin } from "../types"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { Root as HTMLRoot } from "hast"
import { toString } from "hast-util-to-string"
import { escapeHTML } from "../../util/escape"

export interface Options {
  enableCanvas: boolean
}

const defaultOptions: Options = {
  enableCanvas: true,
}

export const Canvas: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Canvas",
    markdownPlugins() {
        return opts.enableCanvas ? [remarkGfm, smartypants] : []
    },
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let canvas = escapeHTML(toString(tree))
            if (tree.children[0].type === "element") {
                if (tree.children[0].children[0].type === "text") {
                    canvas = tree.children[0].children[0].value.replaceAll(/[“”]/g, "\"").replaceAll(/\s/g, "")
                }
            }
            file.data.canvas = parseCanvas(canvas) ? JSON.parse(canvas) : null
          }
        },
      ]
    },
  }
}

function parseCanvas(jsonString: string): boolean {
  try {
    var canvasObject = JSON.parse(jsonString)

    if (canvasObject) {
      return true
    }
  } catch (e) {}

  return false
}

declare module "vfile" {
  interface DataMap {
    canvas: JSON
  }
}
