import { htmlToJsx } from "../../util/jsx"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"
import { RenderCanvas } from "../Canvas"

const CanvasContent: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
  //const content = htmlToJsx(fileData.filePath!, tree)
  const content = RenderCanvas
  const classes: string[] = fileData.frontmatter?.cssclasses ?? []
  const classString = ["popover-hint", ...classes].join(" ")
  return <article class={classString}>{content}</article>
}

export default (() => CanvasContent) satisfies QuartzComponentConstructor
