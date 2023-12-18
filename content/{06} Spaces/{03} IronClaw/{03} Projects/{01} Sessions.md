---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{03} Projects/{01} Sessions/","title":"{01} Sessions","pinned":true}
---


```dataview

LIST sort(rows.file.link)

WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{03} Projects/{01} Sessions")

WHERE file.folder != this.file.folder

WHERE !contains(file.name, ".excalidraw")

GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section

```

## Event Log

```dataview

LIST Lists.text

FROM "{06} Spaces/{03} IronClaw/{03} Projects/{01} Sessions"

FLATTEN file.lists AS Lists

WHERE contains(Lists.tags, "#")

WHERE !Lists.task

SORT Lists DESC

```
