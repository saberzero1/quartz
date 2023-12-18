---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Miners of Narre/","title":"Miners of Narre"}
---


![Banner-Imtrud-polaroid.png|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Imtrud-polaroid.png)

A ragtag band of mineworkers, seeking justice and freedom, staged a daring coup against the Mages of Narre. After a hard-fought battle, the mineworkers emerged victorious, and they seized control of the city. Through their courage and perseverance, they had finally earned their freedom. But the Mages had not gone quietly into the night; their leader had fled, undoubtly plotting revenge.

## Locations:

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Narre\|Narre]]

## Members

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Imtrud\|Imtrud]] (Leader)
- Unnamed miners

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
