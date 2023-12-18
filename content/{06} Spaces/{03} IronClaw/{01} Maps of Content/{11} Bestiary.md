---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{01} Maps of Content/{11} Bestiary/","title":"Bestiary"}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{04} Bestiary")
WHERE file.folder != this.file.folder
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
```

## System

```dataview
TASK FROM #Bestiary
WHERE contains(tags, "#Bestiary")
WHERE !completed
```

```dataview
LIST Lists.text
FROM #Bestiary
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Bestiary")
WHERE !Lists.task
SORT Lists DESC
```

```dataview
TASK FROM #Bestiary
WHERE contains(tags, "#Bestiay")
WHERE completed
LIMIT 300
```
