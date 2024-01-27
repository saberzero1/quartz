// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Body({ children }: QuartzComponentProps) {
  return <div id="quartz-body">{children}</div>
}

Body.afterDOMLoaded = clipboardScript

export default (() => Body) satisfies QuartzComponentConstructor
