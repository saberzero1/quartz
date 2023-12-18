---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{03} Projects/{02} Item/{01} Inventory/Main Gauche/","title":"Main Gauche"}
---

<!--A parrying dagger. A gift from Norrix to better protect myself.-->

A gleaming parrying dagger, a gift from the strong Norrix, lay in my hands, an offering of protection. I held it up to the light, admiring the intricate carvings on its hilt, its shining blade glinting in the sun – a perfect tool to shield me from danger.

## Location Found:

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{02} Narre/Narre's Keep\|Narre's Keep]]

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
