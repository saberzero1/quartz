---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{03} Projects/{03} Quest/{02} Completed/Clear the Farms of Punching Onions/","title":"Clear the Farms of Punching Onions"}
---


A bunch of Onions have infested the farmland near Narre. We are tasked to clear it.

## Questgiver

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Eckart\|Eckart]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Mages of Narre\|Mages of Narre]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Farmers of Narre\|Farmers of Narre]]

## Tasks

- [x] Defeat the Punching Onions in the Farmlands near Narre. #Quest

## Rewards

- Money

## Mentions

```dataview
LIST Lists.text
FROM #Location
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Quest")
WHERE !Lists.task
WHERE contains(Lists.outlinks, this.file.link)
SORT Lists DESC
```
