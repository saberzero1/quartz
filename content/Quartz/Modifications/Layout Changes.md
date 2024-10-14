---
{"id":"e32bb619-8ae1-45e2-8c31-4e45a767f152","title":"Layout Changes","description":"Overview of frequently requested layout changes.","publish":true,"date_created":"Wednesday, October 9th 2024, 10:19:03 pm","date_modified":"Monday, October 14th 2024, 2:22:25 am","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"path":"Quartz/Modifications/Layout Changes.md","permalink":"/quartz/modifications/layout-changes/","PassFrontmatter":true}
---


## Main content width

To change the width of the center content, add the following to `custom.scss`:

```ts
.page {
  max-width: unset; //default is 1500px
}
```

## Apply changes only to desktop/tablet/mobile layout

To apply CSS to a specific layout only, use one of the following:

```scss
@media all and ($mobile) {
  // All styles here only apply to mobile layout.
}
@media all and ($tablet) {
  // All styles here only apply to tablet layout.
}
@media all and ($desktop) {
  // All styles here only apply to desktop layout.
}
@media all and not ($mobile) {
  // All styles here only apply to non-mobile (tablet and desktop) layouts.
}
@media all and not ($desktop) {
  // All styles here only apply to non-desktop (mobile and tablet) layouts.
}
```
