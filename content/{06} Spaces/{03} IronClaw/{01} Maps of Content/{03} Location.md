---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{01} Maps of Content/{03} Location/","title":"Location"}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{02} Location")
WHERE file.folder != this.file.folder
WHERE length(split(file.folder, "/")) = 5
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
```

## System

```dataview
TASK FROM #Location
WHERE contains(tags, "#Location")
WHERE !completed
```

```dataview
LIST Lists.text
FROM #Location
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Location")
WHERE !Lists.task
SORT Lists DESC
```

```dataview
TASK FROM #Location
WHERE contains(tags, "#Location")
WHERE completed
LIMIT 300
```
