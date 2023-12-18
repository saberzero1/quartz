---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{02} Narre/Narre's Keep/","title":"Narre's Keep"}
---


A well-guarded keep near Narre. It imprisons many Miners.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Narre\|Narre]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Keep Guards of Narre\|Keep Guards of Narre]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Miners of Narre\|Miners of Narre]]

## Characters

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Imtrud\|Imtrud]]

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
