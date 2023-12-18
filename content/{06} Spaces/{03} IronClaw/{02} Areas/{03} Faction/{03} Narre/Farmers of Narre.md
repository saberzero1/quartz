---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{03} Faction/{03} Narre/Farmers of Narre/","title":"Farmers of Narre"}
---

<!--The farmers working on the outskirts of Narre.-->

On the distant outskirts of the bustling city of Narre, a group of hard-working farmers toiled away in the fields. The sun shone brightly in the cloudless sky, glinting off the tools they used to tend to their crops. These farmers had been living and working on the outskirts of Narre for generations, their livelihoods tied to the land. Though life was often difficult, the farmers never ceased in their efforts, content with the knowledge that they were providing for their families. In the evening, when the sun had set, they would gather around a campfire, telling stories and singing songs, grateful for the life they had been given.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Narre\|Narre]]

## Members

- Unnamed farmers.

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
