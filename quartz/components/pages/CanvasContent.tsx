import { ComponentChildren } from "preact"
import { htmlToJsx } from "../../util/jsx"
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
  QuartzCanvasComponent,
} from "../types"
import { type FilePath } from "../../util/path"
import fs from "fs"

function loadCanvas(file: FilePath): QuartzCanvasComponent {
  const data = fs.readFileSync(file, "utf8") ?? "{}"
  console.log(data)
  return JSON.parse(data) as QuartzCanvasComponent
}

const CanvasContent: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  //const content = htmlToJsx(fileData.filePath!, tree) as ComponentChildren
  const content = loadCanvas(fileData.filePath!)
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  //TODO: Implement canvas rendering
  return <article class={classString}>{content["nodes"]}</article>
}

export default (() => CanvasContent) satisfies QuartzComponentConstructor
