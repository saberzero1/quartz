---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Opeden/","title":"Opeden"}
---


A town with a Guild Building. It is located near some woods.

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities")
WHERE file.folder != this.file.folder
WHERE contains(file.folder, this.file.name)
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
```

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction")
WHERE file.folder != this.file.folder
WHERE contains(file.folder, this.file.name)
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
```

## Mentions

```dataview
LIST Lists.text
FROM #Location
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Location")
WHERE !Lists.task
WHERE contains(Lists.outlinks, this.file.link)
SORT Lists DESC
```
