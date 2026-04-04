---
publish: true
title: Portfolio
description: Personal portfolio
created: Monday, January 29th 2024, 3:05:46 pm
modified: Sunday, April 5th 2026, 12:05:50 am
published: 2026-04-05T00:05:50.587+02:00
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
        - file.name != "index"
    order:
      - title
      - description
      - link

```

<!--

```datacorejsx
return function View() {
  return <dc.Card title={"Quartz"} content={"Quartz is a fast, batteries-included static-site generator that transforms Markdown content into fully functional websites."} footer={<a href="https://quartz.jzhao.xyz/">link</a>} />;
}
```

```datacorejsx
return function View() {
  return <dc.Card title={"Quartz Syncer"} content={"Manage and publish your notes to Quartz, the fast, batteries-included static-site generator."} footer={<a href="https://saberzero1.github.io/quartz-syncer-docs/">link</a>} />;
}
```

```datacorejsx
return function View() {
  return <dc.Card title={"Quartz Themes"} content={"Obsidian 🤝 Quartz. Quartz-compatible Obsidian themes."} footer={<a href="https://github.com/saberzero1/quartz-themes">link</a>} />;
}
```

## Portfolio

Hello

### Welcome

Nice to meet you

CV: [English CV](https://rxresu.me/saberzero1/curriculum-vitae-english) [Dutch CV](https://rxresu.me/saberzero1/curriculum-vitae-dutch)

```python
print("Hello World")
```

[![GitHub User Stats](https://raw.githubusercontent.com/saberzero1/saberzero1/old/general.svg)](https://github.com/saberzero1)

[![LeetCode Profile](https://raw.githubusercontent.com/saberzero1/saberzero1/old/leetcode.svg)](https://leetcode.com/saberzero1/)
-->
