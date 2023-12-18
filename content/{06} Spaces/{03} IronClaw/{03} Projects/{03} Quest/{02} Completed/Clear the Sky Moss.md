---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{03} Projects/{03} Quest/{02} Completed/Clear the Sky Moss/","title":"Clear the Sky Moss"}
---


A large cloud of Sky Moss is stuck to the Wizard Tower in Narre. Find a way to get rid of it without destroying Narre.

## Questgiver

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Eckart\|Eckart]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Mages of Narre\|Mages of Narre]]

## Tasks

- [x] Clear the Sky Moss #Quest

## Rewards

- Money
- Insider with Cogniscenti

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
