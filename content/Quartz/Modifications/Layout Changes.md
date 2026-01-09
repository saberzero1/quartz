---
publish: true
title: Layout Changes
description: Overview of frequently requested layout changes.
created: 2024-10-09T22:19:03.710+02:00
modified: 2025-05-31T10:14:23.151+02:00
published: 2025-05-31T10:14:23.151+02:00
cssclasses: mado-heading
---


## Main content width

To change the width of the center content:

```scss title="quartz/styles/custom.scss"
.page {
  max-width: <width value>; //default is 1500px (or calc($desktop + 300px))
}
```

> [!NOTE] Dynamic width
> To make the desktop layout take up the entire width of the screen, use `max-width: unset;`

## Apply changes only to desktop/tablet/mobile layout

To apply CSS to a specific layout only, use one of the following:

```scss title="quartz/styles/custom.scss"
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

## Centering images

If you want to center **all** images:

```scss title="quartz/styles/custom.scss"
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

If you only want to center images in the main page content (a.k.a. images embedded inside your notes):

```scss title="quartz/styles/custom.scss"
article.popover-hint img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

## Hiding tags from tag pages

The following hides tag links from all list pages (tags and folders)

```scss title="quartz/styles/custom.scss"
.page-listing .tag-link {
  display: none;
}
```

The following hides all tags, even on content pages:

```scss title="quartz/styles/custom.scss"
.tag-link {
  display: none;
}
```
