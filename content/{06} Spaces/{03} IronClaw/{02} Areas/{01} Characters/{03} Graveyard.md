---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{03} Graveyard/","title":"{03} Graveyard","pinned":true}
---


![Banner-Gravestone-polaroid.png|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Gravestone-polaroid.png)

![Banner-Gravestone-polaroid.png|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Gravestone-polaroid.png)

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{03} Graveyard")
WHERE file.folder != this.file.folder
WHERE length(split(file.folder, "/")) = 5
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
SORT Section DESC
```
