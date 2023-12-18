---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{01} Maps of Content/{02} Characters/","title":"Characters"}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters")
WHERE file.folder != this.file.folder
WHERE length(split(file.folder, "/")) = 5
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
SORT Section DESC
```

## System

```dataview
TASK FROM #Character
WHERE contains(tags, "#Character")
WHERE !completed
```

```dataview
LIST Lists.text
FROM #Character
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Character")
WHERE !Lists.task
SORT Lists DESC
```

```dataview
TASK FROM #Character
WHERE contains(tags, "#Task")
WHERE completed
LIMIT 300
```
