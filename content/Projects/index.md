---
publish: true
title: Projects
description: Overview of Projects.
created: Saturday, April 4th 2026, 11:56:30 pm
modified: Sunday, April 5th 2026, 12:24:48 am
published: 2026-04-05T00:25:09.117+02:00
cssclasses:
  - mado-heading
---

```base
views:
  - type: cards
    name: Cards
    filters:
      and:
        - file.folder == "Projects"
        - title != "Projects"
    order:
      - title
      - description
      - link

```
