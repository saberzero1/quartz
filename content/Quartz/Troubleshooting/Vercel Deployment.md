---
{"publish":true,"title":"Vercel Deployment","description":"Fixes for issues related to Vercel deployment of Quartz.","cssclasses":"mado-heading"}
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
