import remarkGfm from "remark-gfm"
import smartypants from "remark-smartypants"
import { QuartzTransformerPlugin } from "../types"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { fromHtml } from "hast-util-from-html"
import { Root as HTMLRoot, RootContent } from "hast"
import { toString } from "hast-util-to-string"
import { escapeHTML } from "../../util/escape"
import * as d3 from "d3"
import json2html from "node-json2html"
const { render, component } = json2html

export interface Options {
  enableCanvas: boolean
}

const defaultOptions: Options = {
  enableCanvas: true,
}

// @ts-nocheck
const canvasTemplate = {
  main: {
    "<>": "div",
    style: "position: absolute;left:50%;top:50%;",
    class: "canvas canvas-container",
    html: [
      {
        "{}": function () {
          return this.nodes
        },
        html: function (obj, index) {
          console.log(obj.type)
          if (obj.type === "text") {
            return render(obj as JSON, canvasTemplate.text_nodes)
          }
          else if (obj.type === "") {
            return render(obj as JSON, canvasTemplate.text_nodes)
          }
          else {
            return render(obj as JSON, canvasTemplate.default_nodes)
          }
        },
      },
    ],
  },

  text_nodes: {
    "<>": "div",
    html: "${text}",
    class: "canvas canvas-node canvas-text-node",
    id: "${id}",
    style: "position: relative; top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px;",
  },

  default_nodes: {
    "<>": "div",
    html: "${text}",
    class: "canvas canvas-node",
    id: "${id}",
    style: "position: relative; top: ${y}px; left: ${x}px; width: ${width}px; height: ${height}px;",
  },

  nodes: { "<>": "div", id: "${id}", html: "${text}", class: "node" },
}
// @ts-check

export const Canvas: QuartzTransformerPlugin<Partial<Options> | undefined> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Canvas",
    /*markdownPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let canvas = escapeHTML(toString(tree))
            if (tree.children[0].type === "element") {
              if (tree.children[0].children[0].type === "text") {
                canvas = tree.children[0].children[0].value.replaceAll(/[“”]/g, '"')
              }
            }
            file.data.canvas = isCanvas(canvas)
              ? fromHtml(render(JSON.parse(canvas), canvasTemplate.main))
              : null
          }
        },
      ]
    },*/
    htmlPlugins() {
      return [
        () => {
          return async (tree: HTMLRoot, file) => {
            let canvas = escapeHTML(toString(tree))
            if (tree.children[0].type === "element") {
              if (tree.children[0].children[0].type === "text") {
                canvas = tree.children[0].children[0].value.replaceAll(/[“”]/g, '"')
              }
            }
            if (isCanvas(canvas)) {
              file.data.canvas = fromHtml(render(JSON.parse(canvas), canvasTemplate.main))
            }
            else {
              file.data.canvas = null
            }
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
