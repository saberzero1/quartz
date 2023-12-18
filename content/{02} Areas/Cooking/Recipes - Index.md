---
{"dg-publish":true,"permalink":"/{02} Areas/Cooking/Recipes - Index/","title":"Recipes - Index","pinned":true}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, this.file.folder)
WHERE file.folder != this.file.folder
WHERE endswith(file.name, "Index")
GROUP BY regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS Section
```
