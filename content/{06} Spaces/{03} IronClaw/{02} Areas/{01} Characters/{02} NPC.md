---
{"dg-publish":true,"permalink":"/{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC/","title":"{02} NPC","pinned":true}
---


![Banner-Steven-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Steven-polaroid.jpg)

![Banner-Peter-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Peter-polaroid.jpg)

![Banner-Leon-polaroid.png|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Leon-polaroid.png)

![Banner-Imtrud-polaroid.png|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Imtrud-polaroid.png)

![Banner-Hildegart-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Hildegart-polaroid.jpg)

![Banner-Eckart-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Eckart-polaroid.jpg)

![Banner-Arnoud-polaroid.jpg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Arnoud-polaroid.jpg)

![Banner-Aleksi-polaroid.jpeg|200](/img/user/%7B06%7D%20Spaces/%7B03%7D%20IronClaw/%7B04%7D%20Support%20Notes/%7B99%7D%20Media/%7B02%7D%20Polaroid/Banner-Aleksi-polaroid.jpeg)

```dataview
LIST sort(rows.file.link)
WHERE contains(file.folder, "{06} Spaces/{03} IronClaw/{02} Areas/{01} Characters/{02} NPC")
WHERE file.folder != this.file.folder
WHERE length(split(file.folder, "/")) = 5
WHERE !contains(file.name, ".excalidraw")
GROUP BY regexreplace(file.folder, ".*\/\{[0-9]+\}([^\/]+)$", "$1") AS Section
SORT Section DESC
```
