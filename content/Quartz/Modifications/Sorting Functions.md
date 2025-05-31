---
{"publish":true,"title":"Sorting Functions","description":"Overview of frequently requested sorting functions.","created":"Wednesday, October 9th 2024, 10:16:12 pm","modified":"Saturday, May 31st 2025, 10:14:23 am","cssclasses":"mado-heading"}
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
