---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{01} Opeden/Opeden Tavern/","title":"Opeden Tavern"}
---


A tavern with a fighting ring in the middle. Located in Opeden.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Opeden\|Opeden]]

## Factions

- None

## Characters

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Aleksi\|Aleksi]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Leon\|Leon]]
- Unnamed ring fighter
- Unnamed tavern owner

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
