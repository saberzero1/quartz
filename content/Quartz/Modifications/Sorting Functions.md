---
{"id":"a5b4d5b7-a463-4c07-bd71-be51e0cf2508","title":"Sorting Functions","description":"Overview of frequently requested sorting functions.","publish":true,"date_created":"Wednesday, October 9th 2024, 10:16:12 pm","date_modified":"Wednesday, October 16th 2024, 9:08:01 pm","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"PassFrontmatter":true}
---


## Sorting alphabetically

Below gives an example of sorting the links on a `FolderPage` alphabetically, based on their `title` in the frontmatter.

```ts title="quartz.config.ts" showLineNumbers{81}
      Plugin.FolderPage({
        sortFn: (f1, f2) => {
          const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
          const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
          return f1Title.localeCompare(f2Title)
        },
      }),
```
