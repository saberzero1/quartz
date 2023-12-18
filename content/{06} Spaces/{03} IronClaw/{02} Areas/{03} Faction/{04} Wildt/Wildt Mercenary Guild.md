---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{04} Wildt/Wildt Mercenary Guild/","title":"Wildt Apothecary Guild"}
---


Gottliejb

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Wildt\|Wildt]]

## Members

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Anton\|Anton]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{03} Graveyard/Ulvar\|Ulvar]]

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
