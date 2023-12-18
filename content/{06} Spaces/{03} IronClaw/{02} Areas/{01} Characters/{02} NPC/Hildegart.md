---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Hildegart/","title":"Hildegart"}
---


![Banner-Hildegart-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Hildegart-polaroid.jpg)

Hildegart, the Secretary of Eckart was situated at the base of the Mage Tower of Narre, a magical structure of great renown. Its walls were lined with esoteric runes and symbols, a reminder of the arcane power that resided within. The Secretary presided over a vast array of documents, all related to the secrets and mysteries of the magical realm.

## Description

- Secretary of Eckart.
- Located at the bottom floor of the Mage Tower of Narre.

## Mentions

```dataview
LIST Lists.text
FROM #Location
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Character")
WHERE !Lists.task
WHERE contains(Lists.outlinks, this.file.link)
SORT Lists DESC
```
