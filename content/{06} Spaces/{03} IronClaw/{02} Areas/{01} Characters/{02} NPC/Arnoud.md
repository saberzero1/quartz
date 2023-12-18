---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Arnoud/","title":"Arnoud"}
---


![Banner-Arnoud-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Arnoud-polaroid.jpg)

Once a proud knight of a noble order of paladins, he was the sole survivor of a devastating calamity that befell his comrades. While his heart still ached for the loss of his brothers-in-arms, he was determined to carry on their legacy and seek justice for their untimely demise. He held fast to the hope that one day he might avenge his fallen companions and restore their honor. With his trusty sword at his side, he set off on a quest to right the wrongs that had been done; a lone warrior, determined to bring justice to those who had caused so much pain.

## Description

- Paladin
- Seems to have lost his party members in a catastrophe.
- Has a Blue Guild Badge

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
