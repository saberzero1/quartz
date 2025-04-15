---
{"id":"292dfc8c-c178-4064-9c12-a730303af7fd","title":"Component Customization","description":"Fixes for issues with passing parameters to components.","publish":true,"date_created":"Sunday, November 3rd 2024, 8:22:03 pm","date_modified":"Sunday, November 3rd 2024, 8:29:54 pm","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"PassFrontmatter":true}
---


## Sorting Explorer component doesn't work

**Cause:** Various.

**Solution:** See below.

### Sorting with custom frontmatter values

Make sure your custom frontmatter value is included in `frontmatter.ts`'s `VFile` parameters.

### Sorting is not always applied

Make sure your `sortFn` is passed to your `Explorer` component in both `defaultContentPageLayout` (Most pages) and `defaultListPageLayout` (Folder pages, Tag pages).
