---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Eckart/","title":"Eckart"}
---


![Banner-Eckart-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Eckart-polaroid.jpg)

The powerful Head Sorcerer of Narre commanded awe and respect throughout the realm. His mastery of the arcane arts was unparalleled, having attained the Cognoscenti Archmage title, allowing him to read and control the minds of others. For many years, he had been the leader of Narre until a revolutionary miner managed to stage a coup and seize power.

## Description

- Head Sorcerer of Narre.
- Cognoscenti Mage.
	- Basically Mind Reading and Control.
- Former leader of Narre until the miner staged a coup

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
