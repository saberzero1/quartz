---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{01} Party/Norrix/","title":"Norrix"}
---


![Banner-Norrix-polaroid.jpeg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Norrix-polaroid.jpeg)

## Description

- Full name: "Norrix Natalis"
- Motto: "Hit first and hit hard"
- Jackal Bounty-Hunter
- Be mindful of the Mace

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
