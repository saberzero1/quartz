---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{02} Narre/Wizard Tower/","title":"Wizard Tower"}
---


A large black tower looming over Narre. It is home to wizard Eckart.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Narre\|Narre]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Mages of Narre\|Mages of Narre]]

## Characters

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Eckart\|Eckart]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Hildegart\|Hildegart]]

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
