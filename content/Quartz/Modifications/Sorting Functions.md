---
{"publish":true,"title":"Sorting Functions","description":"Overview of frequently requested sorting functions.","created":"2024-10-09T22:16:12.103+02:00","modified":"2024-10-16T21:08:03.566+02:00","cssclasses":"mado-heading"}
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
