---
{"id":"f9970d0b-7499-417d-8866-11003a6328f8","title":"Vercel Deployment","description":"Fixes for issues related to Vercel deployment of Quartz.","publish":true,"date_created":"Wednesday, October 9th 2024, 10:28:48 pm","date_modified":"Wednesday, October 16th 2024, 9:12:29 pm","editing_lock":true,"live_preview":true,"cssclasses":["mado-heading"],"path":"Quartz/Troubleshooting/Vercel Deployment.md","permalink":"/quartz/troubleshooting/vercel-deployment/","PassFrontmatter":true}
---


## Links work locally, but not on Vercel

**Cause:** Vercel doesn't know how to resolve Quartz's hyperlink URLs.

**Solution:** Specify an URL resultion to Vercel:

Add a file named `vercel.json` to your root folder (the same containing the `quartz.config.ts` file), with the following contents:

```json title="vercel.json"
{
  "cleanUrls": true
}
```
