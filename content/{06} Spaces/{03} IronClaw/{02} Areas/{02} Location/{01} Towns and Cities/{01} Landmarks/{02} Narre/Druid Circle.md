---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{02} Narre/Druid Circle/","title":"Druid Circle"}
---


A Circle of Druids near Narre.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Narre\|Narre]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Druids of Narre\|Druids of Narre]]

## Characters

- Unnamed druids

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
