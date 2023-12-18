---
{"dg-publish":true,"permalink":"/{03} Resources/{04} Videos/Videos - Index/","title":"Videos - Index","pinned":true}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, this.file.folder)
WHERE file.folder != this.file.folder
GROUP BY regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS Section
```
