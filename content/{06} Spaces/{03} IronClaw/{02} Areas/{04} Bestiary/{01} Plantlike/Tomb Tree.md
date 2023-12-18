---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{04} Bestiary/{01} Plantlike/Tomb Tree/","title":"Tomb Tree"}
---


A large tree radiating dark energy. It makes a continuous howling sound.

## Mentions

```dataview
LIST Lists.text
FROM #Location
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Bestiary")
WHERE !Lists.task
WHERE contains(Lists.outlinks, this.file.link)
SORT Lists DESC
```
