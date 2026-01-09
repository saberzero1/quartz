---
publish: true
title: GitHub Pages Deployment
description: Fixes for issues related to GitHub Pages deployment of Quartz.
created: 2024-10-09T22:10:10.716+02:00
modified: 2025-05-31T10:14:23.131+02:00
published: 2025-05-31T10:14:23.131+02:00
cssclasses: mado-heading
---


## GitHub Actions returns error 'engine Not compatible with your version of node/npm'

**Cause:** Outdated Node.js version in GitHub Actions runner.

**Solution:** Edit your `deploy.yml` file and update the `node-version`:

```yaml title=".github/workflows/deploy.yml" {3} showLineNumbers{24}
- uses: actions/setup-node@v3
  with:
    node-version: 18.14 # Not supported anymore
- name: Install Dependencies
  run: npm ci
```

To this:

```yaml title=".github/workflows/deploy.yml" {3} showLineNumbers{24}
- uses: actions/setup-node@v3
  with:
    node-version: 22
- name: Install Dependencies
  run: npm ci
```

## GitHub Pages fails to build when using submodules

**Cause:** The `deploy.yml` needs to explicitly be configured to include submodules.

**Solution:** Add the following line to your `deploy.yml`:

```yml title=".github/workflows/deploy.yml" {8} showLineNumbers{17}
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for git info
          submodules: recursive
      - uses: actions/setup-node@v4
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public
```
