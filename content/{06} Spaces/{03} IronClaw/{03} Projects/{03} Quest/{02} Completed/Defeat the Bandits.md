---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{03} Projects/{03} Quest/{02} Completed/Defeat the Bandits/","title":"Defeat the Bandits"}
---


A bunch of bandits are causing ruckus in the woods between Opeden and Narre. Find out where they are hiding and defeat them.

## Questgiver

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Leon\|Leon]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{02} Opeden/Bandits of Opeden\|Bandits of Opeden]]

## Tasks

- [x] Find out where the bandits are hiding. #Quest
	- [x] Learn of [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Steven\|Steven]]'s involvement. #Quest
- [x] Defeat the bandits. #Quest

## Rewards

- A free ride to Narre in Leon's cart.

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
