---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Keep Guards of Narre/","title":"Keep Guards of Narre"}
---

<!--The Guards guarding the Keep near Narre. They follow orders from the Mages of Narre.-->

The guards of the Keep near Narre were an elite force, trained to obey the commands of the Mages of Narre without hesitation. Fearless and loyal, they patrolled the walls of the Keep, ready to protect it at a moment's notice. Their polished armor glinted in the sun, and their weapons were sharp and ready. They were a fearsome sight to behold, and a reminder of the power of the Mages of Narre.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Narre\|Narre]]

## Members

- Unnamed leader
- Unnamed Guards

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
