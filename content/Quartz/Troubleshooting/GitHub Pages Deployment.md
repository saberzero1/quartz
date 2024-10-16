---
{"id":"f2fa9fd3-a54f-4cf4-9f86-e80d867f0775","title":"GitHub Pages Deployment","description":"Fixes for issues related to GitHub Pages deployment of Quartz.","publish":true,"date_created":"Wednesday, October 9th 2024, 10:10:10 pm","date_modified":"Wednesday, October 16th 2024, 9:02:16 pm","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"path":"Quartz/Troubleshooting/GitHub Pages Deployment.md","permalink":"/quartz/troubleshooting/git-hub-pages-deployment/","PassFrontmatter":true}
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
