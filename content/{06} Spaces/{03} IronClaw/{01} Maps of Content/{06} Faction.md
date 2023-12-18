---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{01} Maps of Content/{06} Faction/","title":"Faction"}
---


## Factions

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction")
WHERE file.folder != this.file.folder
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
```

## System

```dataview
TASK FROM #Faction
WHERE contains(tags, "#Faction")
WHERE !completed
```

```dataview
LIST Lists.text
FROM #Faction
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Faction")
WHERE !Lists.task
SORT Lists DESC
```

```dataview
TASK FROM #Faction
WHERE contains(tags, "#Faction")
WHERE completed
LIMIT 300
```
