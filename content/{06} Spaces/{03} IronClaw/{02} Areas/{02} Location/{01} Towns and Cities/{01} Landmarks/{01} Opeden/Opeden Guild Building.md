---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{01} Opeden/Opeden Guild Building/","title":"Opeden Guild Building"}
---


The Hornwaldia Guild Building located in Opeden. It is place where adventurers gather.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Opeden\|Opeden]]

## Factions

- [[003_Resources/Tabletop/IronClaw/And a 1000 Years More/Faction/Misc/Party\|Party]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{01} Misc/Leftovers of the Paladins\|Leftovers of the Paladins]]

## Characters

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Steven\|Steven]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Peter\|Peter]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Arnoud\|Arnoud]]
- Unnamed secretary

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
