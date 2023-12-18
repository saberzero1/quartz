---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/{01} Landmarks/{03} Wildt/Wildt's Fair/","title":"Wildt's Fair"}
---


A large fair held in Wildt.

## Location

- [[{06} Spaces/{03} IronClaw/{02} Areas/{02} Location/{01} Towns and Cities/Wildt\|Wildt]]

## Factions

- None

## Characters

- None

## Mentions

```dataview
LIST Lists.text
FROM #Location
FLATTEN file.lists AS Lists
WHERE contains(Lists.tags, "#Location")
WHERE !Lists.task
WHERE contains(Lists.outlinks, this.file.link)
SORT Lists DESC
```
