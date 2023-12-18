---
{"dg-publish":true,"permalink":"/{03} Resources/Resources - Index/","title":"Resources - Index","pinned":true}
---


#Index

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, this.file.folder)
WHERE file.folder != this.file.folder
WHERE endswith(file.name, "Index")
WHERE length(split(file.folder, "/")) = 2
GROUP BY regexreplace(file.folder, ".*\/([^\/]+)$", "$1") AS Section
```
