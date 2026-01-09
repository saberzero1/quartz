---
publish: true
title: Build errors
description: Fixes to common build errors of Quartz.
created: 2024-10-16T20:43:14.166+02:00
modified: 2025-05-31T10:14:23.139+02:00
published: 2025-05-31T10:14:23.139+02:00
cssclasses: mado-heading
---


## Failed to emit from plugin 'ComponentResources': afterBody is not iterable

**Cause:** `afterBody` is missing from `quartz.layout.ts`.

**Solution:** Add `afterBody: [],` to `quartz.layout.ts`:

```ts title="quartz.layout.ts" {5} showLineNumbers{4}
// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}
```
