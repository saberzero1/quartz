import remarkGfm from "remark-gfm"
import smartypants from "remark-smartypants"
import { QuartzTransformerPlugin } from "../types"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { fromHtml } from "hast-util-from-html"
import { Root as HTMLRoot, RootContent } from "hast"
import { toString } from "hast-util-to-string"
import { escapeHTML } from "../../util/escape"
import json2html from "node-json2html"
const { render, component } = json2html

export interface Options {
  enableCanvas: boolean
}

const defaultOptions: Options = {
  enableCanvas: true,
}

const canvasTemplate = {
  // @ts-ignore
  main: {
    "<>": "div",
    html: [
      {
        // @ts-ignore
        "{}": function () {
          // @ts-ignore
          return this.nodes
        },
        // @ts-ignore
        html: function (obj, index) {
          return render(obj as JSON, canvasTemplate.text_nodes)
        },
      },
    ],
  },

  text_nodes: {
    "<>": "div",
    html: "${text}",
    class: "node",
    id: "${id}",
    style: "position: absolute; top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px;",
  },

  nodes: { "<>": "div", id: "${id}", html: "${text}", class: "node" },

  edges: {},
}

export const Canvas: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Canvas",
    markdownPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let canvas = escapeHTML(toString(tree))
            if (tree.children[0].type === "element") {
              if (tree.children[0].children[0].type === "text") {
                canvas = tree.children[0].children[0].value.replaceAll(/[“”]/g, '"') //.replaceAll(/\s/g, "")
              }
            }
            file.data.canvas = isCanvas(canvas)
              ? fromHtml(render(JSON.parse(canvas), canvasTemplate.main))
              : null
          }
        },
      ]
    },
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let canvas = escapeHTML(toString(tree))
            if (tree.children[0].type === "element") {
              if (tree.children[0].children[0].type === "text") {
                canvas = tree.children[0].children[0].value.replaceAll(/[“”]/g, '"') //.replaceAll(/\s/g, "")
              }
            }
            file.data.canvas = isCanvas(canvas)
              ? fromHtml(render(JSON.parse(canvas), canvasTemplate.main))
              : null
            console.log(
              isCanvas(canvas)
                ? // @ts-ignore
                  fromHtml(render(JSON.parse(canvas), canvasTemplate.main)).children[0].children[1]
                    .children
                : "",
            )
          }
        },
      ]
    },
  }
}

function isCanvas(jsonString: string): boolean {
  try {
    let canvasObject = JSON.parse(jsonString)

    if (canvasObject) {
      return true
    }
  } catch (e) {}

  return false
}

declare module "vfile" {
  interface DataMap {
    canvas: HTMLRoot | null
  }
}
