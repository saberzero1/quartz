---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{03} Projects/{02} Item/{02} Gifts/Stitch in Time/","title":"Stitch in Time"}
---


> [!info] Stitch in Time
> *(Chapter, Major, Saving)*
> 
> Requires:
> - Danger Sense
> - [ ] (Chapter)

*Trigger: you are attacked*

You have an amazing ability to recover just before someone attacks. When you are attacked, but before any attack dice are rolled, declare you will exhaust this Gift for the following benefits:

- Negate all Reeling, Asleep, and/or Unconsciousness status on yourself.
- Replace any Dying condition with Sick and Afraid.
- Add the Guarding status.

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
