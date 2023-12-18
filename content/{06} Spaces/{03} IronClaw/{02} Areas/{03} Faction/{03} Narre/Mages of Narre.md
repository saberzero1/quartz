---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Mages of Narre/","title":"Mages of Narre"}
---


![Banner-Eckart-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Eckart-polaroid.jpg)

![Banner-Hildegart-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Hildegart-polaroid.jpg)

A mysterious cabal of mages had once held dominion over the lands of Narre, their power derived from their mastery of mind-based magicks. They were a formidable force to be reckoned with, but ultimately, their reign was overthrown by a brave group of adventurers.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Narre\|Narre]]

## Members

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Eckart\|Eckart]] (Leader)
- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Hildegart\|Hildegart]]
- Unnamed Mage Students

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
