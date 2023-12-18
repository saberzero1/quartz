---
{"dg-publish":true,"permalink":"/{03} Resources/{01} Tabletop/Tabletop - Index/","title":"Tabletop - Index","pinned":true}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, this.file.folder)
WHERE file.folder != this.file.folder
WHERE endswith(file.name, "Index")
WHERE length(split(file.folder, "/")) = 4
GROUP BY regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS Section
```
