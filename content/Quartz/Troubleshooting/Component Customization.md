---
publish: true
title: Component Customization
description: Fixes for issues with passing parameters to components.
created: 2024-11-03T20:22:03.777+01:00
modified: 2025-05-31T10:14:23.143+02:00
published: 2025-05-31T10:14:23.143+02:00
cssclasses: mado-heading
---


## Sorting Explorer component doesn't work

**Cause:** Various.

**Solution:** See below.

### Sorting with custom frontmatter values

Make sure your custom frontmatter value is included in `frontmatter.ts`'s `VFile` parameters.

### Sorting is not always applied

Make sure your `sortFn` is passed to your `Explorer` component in both `defaultContentPageLayout` (Most pages) and `defaultListPageLayout` (Folder pages, Tag pages).
