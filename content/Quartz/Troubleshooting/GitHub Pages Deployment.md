---
{"id":"f2fa9fd3-a54f-4cf4-9f86-e80d867f0775","title":"GitHub Pages Deployment","description":"Fixes for issues related to GitHub Pages deployment of Quartz.","publish":true,"date_created":"Wednesday, October 9th 2024, 10:10:10 pm","date_modified":"Wednesday, October 9th 2024, 10:37:12 pm","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"path":"Quartz/Troubleshooting/GitHub Pages Deployment.md","permalink":"/quartz/troubleshooting/git-hub-pages-deployment/","PassFrontmatter":true}
---


## GitHub Actions returns error 'engine Not compatible with your version of node/npm'

Edit your `deploy.yml` file and update the following:

```yaml
- uses: actions/setup-node@v3
  with:
    node-version: 18.14
- name: Install Dependencies
  run: npm ci
```

To this:

```yaml
- uses: actions/setup-node@v3
  with:
    node-version: 20
- name: Install Dependencies
  run: npm ci
```
