---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{03} Projects/{03} Quest/{02} Completed/Free Narre/","title":"Free Narre"}
---


Free Narre from the rule of the Mages.

## Questgiver

- [[{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/Imtrud\|Imtrud]]

## Factions

- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Mages of Narre\|Mages of Narre]]
- [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Miners of Narre\|Miners of Narre]]

## Tasks

- [x] Defeat the resistance defending the Mage Tower #Quest
- [x] Free Narre from the Mages #Quest

## Rewards

- Money
- Insider with Narre

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
