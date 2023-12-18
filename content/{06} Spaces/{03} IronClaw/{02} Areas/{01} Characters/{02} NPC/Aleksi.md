---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Aleksi/","title":"Aleksi"}
---


![Banner-Aleksi-polaroid.jpeg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Aleksi-polaroid.jpeg)

This Fruit Bat Bard was a mysterious figure that followed the party of adventurers, always seeking new stories to tell. He was first encountered in the Opeden Tavern, wearing a striking cape made of rare sky moss that shimmered in the firelight. He had a keen eye and ear for the tales of ancient lore, and with a twinkle in his eye he would always promise to pay the teller with a song.

## Description

- Fruit Bat Bard.
- Follows the Party looking for stories.
- Met in Opeden Tavern
- Has a cape made of Sky Moss.

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
