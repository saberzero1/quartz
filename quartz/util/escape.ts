export const escapeHTML = (unsafe: string) => {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export const unescapeHTML = (unsafe: string) => {
  const scripts = unsafe.match(/<script.*?>.*?<\/script>/g)
  const getExcalidrawScripts = scripts?.filter((script) => script.includes("excalidraw"))
  console.log(getExcalidrawScripts)
  const escapedScripts = getExcalidrawScripts?.map((script) =>
    script
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&quot;", '"')
      .replaceAll("&#039;", "'"),
  )
  console.log(escapedScripts)
  // replace excalidraw scripts with escaped versions
  if (getExcalidrawScripts && escapedScripts) {
    for (let i = 0; i < escapedScripts.length; i++) {
      unsafe = unsafe.replace(getExcalidrawScripts[i], escapedScripts[i])
    }
  }
  return unsafe
}
