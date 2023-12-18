---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{01} Maps of Content/{09} Diary/","title":"Diary"}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{03} Projects/{05} Diary")
WHERE file.folder != this.file.folder
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
```

## System

```dataview
TASK FROM #Diary
WHERE contains(tags, "#Diary")
WHERE !completed
```

```dataview
LIST Lists.text
FROM #Diary
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Diary")
WHERE !Lists.task
SORT Lists DESC
```

```dataview
TASK FROM #Diary
WHERE contains(tags, "#Diary")
WHERE completed
LIMIT 300
```
