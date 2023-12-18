---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/","title":"{01} Characters","pinned":true}
---


## Characters

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters")
WHERE file.folder != this.file.folder
WHERE length(split(file.folder, "/")) = 4
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
SORT Section DESC
```
