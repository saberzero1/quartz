---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{03} Projects/{02} Item/{01} Inventory/Green Level Guild Badge/","title":"Green Level Guild Badge"}
---


A guild badge for the [[{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{01} Misc/Hornwaldia Adventurer's Guild\|Hornwaldia Adventurer's Guild]]. This one is the lowest level.

## Location Found

- Starting Equipment.

## Mentions

```dataview
LIST Lists.text
FROM #Location
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Item")
WHERE !Lists.task
WHERE contains(Lists.outlinks, this.file.link)
SORT Lists DESC
```
