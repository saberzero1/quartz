---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Druids of Narre/","title":"Druids of Narre"}
---

<!--A Circle of Druids near Narre. Some wonder about their secrets.-->

Nestled in the misty groves of Narre, a circle of druids gathered in solemn silence. Shrouded in mystery, their secrets were whispered on the wind, and tales of their mysterious powers spread far and wide. Those who ventured too close found themselves overcome with a sense of awe and reverence for this powerful and ancient force. The druids, clad in robes of emerald green, sat in a perfect circle, chanting and invoking the ancient gods of the land. As the sun set, a mist descended upon the circle, cloaking them in its mysterious embrace. Those who dared to cross its boundaries were transformed, gifted with a newfound sense of purpose and a deep reverence for the natural world.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Narre\|Narre]]

## Members

- Unnamed leader
- Unnamed members

## Mentions

```dataview
LIST Lists.text
FROM #Faction 
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Faction")
WHERE !Lists.task
WHERE contains(Lists.outlinks, this.file.link)
SORT Lists DESC
```
