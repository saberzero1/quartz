---
{"id":"ee3896ee-8704-409b-bdd4-c69da4c5c5a1","title":"Build errors","description":"Fixes to common build errors of Quartz.","publish":true,"date_created":"Wednesday, October 16th 2024, 8:43:14 pm","date_modified":"Wednesday, October 16th 2024, 8:56:44 pm","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"path":"Quartz/Troubleshooting/Build errors.md","permalink":"/quartz/troubleshooting/build-errors/","PassFrontmatter":true}
---


## Failed to emit from plugin 'ComponentResources': afterBody is not iterable

**Cause:** `afterBody` is missing from `quartz.layout.ts`.

**Solution:** Add `afterBody: [],` to `quartz.layout.ts`:

```ts title="quartz.layout.ts" {5} showLineNumbers{4}
// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}
```
