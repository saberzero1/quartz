---
{"id":"f2fa9fd3-a54f-4cf4-9f86-e80d867f0775","title":"GitHub Pages Deployment","description":"Fixes for issues related to GitHub Pages deployment of Quartz.","publish":true,"date_created":"Wednesday, October 9th 2024, 10:10:10 pm","date_modified":"Sunday, October 27th 2024, 11:36:19 am","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"PassFrontmatter":true}
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
