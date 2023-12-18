---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{03} Graveyard/Morale/","title":"Morale"}
---


![Banner-Gravestone-polaroid.png|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Gravestone-polaroid.png)

## Description

- Full name: Morale Crow
- Motto: "Fool me once, shame on you, fool me twice, shame on me."
- Dives in way too fast

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
