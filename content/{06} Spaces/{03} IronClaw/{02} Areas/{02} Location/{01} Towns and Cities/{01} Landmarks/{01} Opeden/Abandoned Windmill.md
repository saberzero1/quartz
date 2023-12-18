---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{01} Opeden/Abandoned Windmill/","title":"Abandoned Windmill"}
---


An abandoned windmill in the woods near Opeden.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Opeden\|Opeden]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{02} Opeden/Bandits of Opeden\|Bandits of Opeden]]

## Characters

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Steven\|Steven]]
- Unnamed Monkeys (4)

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
