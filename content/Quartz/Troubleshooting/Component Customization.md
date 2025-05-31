---
{"publish":true,"title":"Component Customization","description":"Fixes for issues with passing parameters to components.","created":"Sunday, November 3rd 2024, 8:22:03 pm","modified":"Saturday, May 31st 2025, 10:14:23 am","cssclasses":"mado-heading"}
---


## Sorting Explorer component doesn't work

**Cause:** Various.

**Solution:** See below.

### Sorting with custom frontmatter values

Make sure your custom frontmatter value is included in `frontmatter.ts`'s `VFile` parameters.

### Sorting is not always applied

Make sure your `sortFn` is passed to your `Explorer` component in both `defaultContentPageLayout` (Most pages) and `defaultListPageLayout` (Folder pages, Tag pages).
