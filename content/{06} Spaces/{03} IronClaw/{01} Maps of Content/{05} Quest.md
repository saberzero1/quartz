---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{01} Maps of Content/{05} Quest/","title":"Quest"}
---


## Quests

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{03} Projects/{03} Quest")
WHERE file.folder != this.file.folder
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
SORT Section DESC
```

## System

```dataview
TASK FROM #Quest
WHERE contains(tags, "#Quest")
WHERE !completed
```

```dataview
LIST Lists.text
FROM #Quest
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Quest")
WHERE !Lists.task
SORT Lists DESC
```

```dataview
TASK FROM #Quest
WHERE contains(tags, "#Quest")
WHERE completed
LIMIT 300
```
