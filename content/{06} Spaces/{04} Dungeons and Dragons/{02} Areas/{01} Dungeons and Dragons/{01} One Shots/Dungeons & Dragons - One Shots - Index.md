---
{"dg-publish":true,"permalink":"/{06} Spaces/{04} Dungeons and Dragons/{02} Areas/{01} Dungeons and Dragons/{01} One Shots/Dungeons & Dragons - One Shots - Index/","title":"Dungeons & Dragons - One Shots - Index","pinned":true}
---


```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, this.file.folder)
WHERE file.folder != this.file.folder
WHERE endswith(file.name, "Index")
GROUP BY regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS Section
```
