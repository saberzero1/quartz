import remarkGfm from "remark-gfm"
import smartypants from "remark-smartypants"
import { QuartzTransformerPlugin } from "../types"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import { Root as HTMLRoot } from "hast"
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
  'main': {'<>':'div','html':[
    // @ts-ignore
    {'{}':function(){return this.nodes},'html':[
      {'<>':'div','class':'node',
      // @ts-ignore
      'html':function(obj, index){return (obj.id)}}
    ]}
  ]},

  'nodes': {'<>':'div','id':'${id}','html':'${text}','class':'node'},

  'edges': {}
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
                    canvas = tree.children[0].children[0].value.replaceAll(/[“”]/g, "\"") //.replaceAll(/\s/g, "")
                }
            }
            file.data.canvas = isCanvas(canvas) ? render(JSON.parse(canvas), canvasTemplate.main) : null
            // @ts-ignore
            console.log(isCanvas(canvas) ? JSON.parse(canvas).nodes[0].id : null)
            console.log(file.data.canvas)
          }
        },
      ]
    },
  }
}

function isCanvas(jsonString: string): boolean {
  try {
    var canvasObject = JSON.parse(jsonString)

    if (canvasObject) {
      return true
    }
  } catch (e) {}

  return false
}

function json2htmlString(json: JSON): string {
  return json2html.render(json, canvasTemplate)
}

declare module "vfile" {
  interface DataMap {
    canvas: string | null
  }
}
