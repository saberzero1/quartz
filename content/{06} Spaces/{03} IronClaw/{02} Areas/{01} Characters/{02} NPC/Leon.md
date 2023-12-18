---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Leon/","title":"Leon"}
---


![Banner-Leon-polaroid.png|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Leon-polaroid.png)

The Skunk Coachman was a cowardly figure. He had a penchant for transporting travelers from Opeden to Narre, and, on this fateful day, had the honor of ferrying a group of brave adventurers who had just emerged victorious from a fierce battle against the Bandits who had threatened to hijack his cart. With a determined glint in his eye, the Skunk Coachman expertly guided his trusty steed towards the distant horizon, leaving the broken remains of the Bandits in the dust.

## Description

- Skunk Coachman.
- Taxied us from Opeden to Narre after we defeated the Bandits that threatened his cart.

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
