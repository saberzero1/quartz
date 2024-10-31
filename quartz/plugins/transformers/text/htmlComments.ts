import { TextTransformerPlugin } from "../../types"

const commentRegex = new RegExp(/<!--.*?-->/gms)
const codeBlockRegex = new RegExp(/(```.*?```)/gms)

export const HtmlComments: TextTransformerPlugin = () => {
  return {
    name: "ObsidianFlavoredMarkdownComments",
    transformation(_ctx, src) {
      // do comments at text level
      if (src instanceof Buffer) {
        src = src.toString()
      } // capture all codeblocks before parsing comments
      const codeBlocks = Array.from(src.matchAll(codeBlockRegex), (x) => x[1].toString())

      src = src.replaceAll(codeBlockRegex, "###codeblockplaceholder###")

      src = src.replaceAll(commentRegex, "")

      // Restore codeblocks
      codeBlocks.forEach((codeblock) => {
        src = src.replace("###codeblockplaceholder###", codeblock)
      })

      return src
    },
  }
}
