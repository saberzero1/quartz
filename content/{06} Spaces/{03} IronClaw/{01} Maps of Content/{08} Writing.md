---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{01} Maps of Content/{08} Writing/","title":"Writing"}
---


Things [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{01} Party/Lux\|I]] wrote down.

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{03} Projects/{04} Writing")
WHERE file.folder != this.file.folder
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
```

## System

```dataview
TASK FROM #Writing
WHERE contains(tags, "#Writing")
WHERE !completed
```

```dataview
LIST Lists.text
FROM #Writing
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Writing")
WHERE !Lists.task
SORT Lists DESC
```

```dataview
TASK FROM #Writing
WHERE contains(tags, "#Writing")
WHERE completed
LIMIT 300
```
