---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{01} Opeden/Town Ruins/","title":"Town Ruins"}
---


Ruins of a town. It appears it was destroyed by unholy magic.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Opeden\|Opeden]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{01} Misc/Leftovers of the Paladins\|Leftovers of the Paladins]]

## Characters

- None

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
