---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{01} Maps of Content/{04} Item/","title":"Item"}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{03} Projects/{02} Item")
WHERE file.folder != this.file.folder
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
```

## System

```dataview
TASK FROM #Item
WHERE contains(tags, "#Item")
WHERE !completed
```

```dataview
LIST Lists.text
FROM #Item
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Item")
WHERE !Lists.task
SORT Lists DESC
```

```dataview
TASK FROM #Item
WHERE contains(tags, "#Item")
WHERE completed
LIMIT 300
```
