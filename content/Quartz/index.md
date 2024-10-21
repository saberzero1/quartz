---
{"id":"59ba1422-8b7c-4add-92b1-ca77b7d8c7a1","title":"Quartz","description":"Quartz Guides, Tricks, and Solutions.","publish":true,"date_created":"Wednesday, October 9th 2024, 10:03:56 pm","date_modified":"Monday, October 21st 2024, 8:39:29 pm","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"path":"Quartz/index.md","permalink":"/quartz/index/","PassFrontmatter":true}
---


- [[Quartz/Community Showcase/index\|Community Showcase]] - Cool tools and extension by and for the Quartz Community.
- [[Quartz/FAQ/index\|FAQ]] - Overview of frequently asked questions with answers.
- [[Quartz/Modifications/index\|Modifications]] - Overview of frequently requested modifications.
- [[Quartz/Troubleshooting/index\|Troubleshooting]] - Overview of frequent issues and troubleshooting steps.


## Current Priorities

> [!info] Legend
>
> **Status**
>
> | Icon | Description |
> | ---- | ----------- |
> | 📝   | Planned     |
> | 💬   | Considering |
> | ✅    | Done        |
> | ⏳    | In progress |
> | 🛠️  | Testing     |
> | 🚀   | Released    |
> | 🚑   | Triage      |
> | ⛔    | Blocked     |
>
> **Type**
>
> | Icon | Description |
> | --- | --- |
> | 🎯   | Feature     |
> | 👾   | Bug         |
> | 📜 | Documentation/Guides |
> | ❌    | Won't do    |

### Quartz

> 🌱 a fast, batteries-included static-site generator that transforms Markdown content into fully functional websites.

[Repository link](https://github.com/jackyzha0/quartz)

#### Active

- [ ] ⏳🎯[Markdown Parser Rework](https://github.com/jackyzha0/quartz/pull/1496)
	- [x] ✅Convert current functionality
	- [ ] ⏳Add default recipes
		- [ ] ⏳Quartz default (current default)
		- [ ] ⏳Obsidian default (priorities Obsidian compatibility)
		- [ ] 💬Commonmark (priorities platform-agnostic compatibility)
	- [ ] 📝Fix known parser issues
		- [ ] 📝Obsidian style callouts
		- [ ] 📝Embedding with non-wikilink
	- [ ] 📝Update docs
		- [ ] 📝Current features
		- [ ] 📝New functionality
		- [ ] 💬Guide on custom parsers
- [ ] 🛠️🎯[Mobile compatible Explorer component](https://github.com/jackyzha0/quartz/pull/1471)
	- [x] ✅Collapsible on mobile
	- [ ] 🛠️Hamburger menu
		- [ ] 👾Fix styling
		- [ ] 👾Fix scroll flicker
	- [ ] 📝Update docs
- [ ] 📝👾[Explorer caching breaks when folders contain special but legal characters](https://github.com/jackyzha0/quartz/issues/1524)
- [ ] 📝👾[folderClickBehaviour "link" broken on folder/tag pages](https://github.com/jackyzha0/quartz/issues/1532)
- [ ] 📝🎯[Fine-grained Comments component inclusion/exclusion](https://github.com/jackyzha0/quartz/issues/1534)
	- [ ] 📝Frontmatter inclusion (similar to `publish: true`)
	- [ ] 📝Frontmatter exclusion (similar to `draft: true`)
	- [ ] 📝Update docs
- [ ] 📝🎯[Inline CSS support in component externalResources](https://github.com/jackyzha0/quartz/issues/1527)
	- [ ] 📝Determine cascading priority
		- [ ] 📝Same as component
	- [ ] 📝Update docs

#### Backlog

- [ ] 📝🎯Community plugins
- [ ] 📝🎯[Reimplement gradient :after](https://github.com/jackyzha0/quartz/issues/1529)

#### Completed

- [x] 🚀🎯[CSS Grid layout](https://github.com/jackyzha0/quartz/pull/1354)

### Quartz Syncer

> Manage your Quartz site content from inside Obsidian. Full support for Dataview and Excalidraw.

[Repository link](https://github.com/saberzero1/quartz-syncer)

#### Active

- [ ] ⏳🎯Expose full config specification to users

#### Backlog

- [ ] 📝🎯Get link resolution from Obsidian and/or Quartz
- [ ] 📝👾Link resolution issues
- [ ] 📝👾Broken permalinks

#### Completed

### Quartz Themes

> Obsidian 🤝 Quartz. Quartz compatible Obsidian Themes.

[Repository link](https://github.com/saberzero1/quartz-themes)

#### Active

- [ ] ⏳🎯 [Automatic Obsidian themes conversion](https://github.com/saberzero1/quartz-themes/pull/16)
	- [x] ✅Parse properly formed Obsidian CSS to Quartz compatible
	- [ ] ⏳Map all relevant Obsidian variables to Quartz
	- [ ] 📝Clean up structure
	- [ ] 💬Implement as Quartz component
	- [ ] 📝Update docs

#### Backlog

- [ ] 💬👾Override Obsidian themes not (fully) following Obsidian specs
- [ ] 📝🎯Theme compatibility tracker
- [ ] 📝🎯Automatic preview generator
- [ ] 📝🎯Automatic conversion verification

#### Completed
