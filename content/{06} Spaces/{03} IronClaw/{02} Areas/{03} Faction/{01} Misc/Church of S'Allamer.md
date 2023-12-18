---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{01} Misc/Church of S'Allamer/","title":"Church of S'Allamer"}
---


The church of the enlightened.

## Location

- Hornwaldia

## Members

## Mentions

```dataview
LIST Lists.text
FROM #Faction 
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Faction")
WHERE !Lists.task
WHERE contains(Lists.outlinks, this.file.link)
SORT Lists DESC
```
