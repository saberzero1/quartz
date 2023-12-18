---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{01} Party/Damjan/","title":"Damjan"}
---


![Banner-Damjan-polaroid.png|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Damjan-polaroid.png)

## Description

- Full name: Damjan Gjergj Meridius
- Motto: "La vengeance se mange très bien froide."
- Deserted (Soldier) Panther
- Great with ranged combat
- Secretly wants to overthrow the Empire

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
