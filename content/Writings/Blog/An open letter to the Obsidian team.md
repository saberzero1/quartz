---
{"publish":true,"title":"An open letter to the Obsidian team","description":"Addressing the current plugin ecosystem.","created":"Sunday, June 1st 2025, 7:03:44 pm","modified":"Sunday, June 1st 2025, 11:59:23 pm","published":"2025-06-01","tags":["Opinion","Blog"],"cssclasses":"mado-heading"}
---


## Dear Obsidian team

> Hello, my name is Emile, but most of you probably know me as saberzero1. I am one of the core maintainers of [Quartz](https://quartz.jzhao.xyz/) and I develop various [tools](https://saberzero1.github.io/quartz-syncer-docs/) and [integrations](https://github.com/saberzero1/quartz-themes) that improve using Obsidian with Quartz. I have seen [growing trend](https://www.reddit.com/r/ObsidianMD/comments/1kxjr2m/for_a_better_obsidian_plugin_market/) over the past few months that I hope to address in this letter. This letter is a love letter to the Obsidian team and the Obsidian community. The points raised are not to tear down the Obsidian developers nor the amazing community, rather it is ensure that the Obsidian community can continue to grow and thrive.

For the past four years I have had the pleasure of being part of the Obsidian community. I have watched the community grow and have seen a lot of amazing projects being shared. Despite presenting itself as a note-taking app with an offline, you-own-your-notes approach, it has gathered a massive community of passionate writers, bloggers, tabletop RPG players, developers, content creators, artists, and many more. Who would've thought that a note-taking app would create such a vibrant and amazing community?

All that success and growth has been achieved despite the very small team working on the core Obsidian product. Over the past few months, I have noticed an increase in the number of question and concerns in the official Obsidian Discord server related to the plugin review process. It seems to take longer and longer to get a plugin approved. This, of course, is unsurprising due to the small team size.

### A sustainable plugin ecosystem

Currently, the plugin review process works like this:

1. You create a plugin, adhering to the [developer policies](https://docs.obsidian.md/Developer+policies) and [plugin submission requirements](https://docs.obsidian.md/Plugins/Releasing/Submission+requirements+for+plugins).
2. You submit a pull request to the Obsidian releases repository, adding your plugin to the long list of community plugins.
3. A bot scans your code for any problems or remarks, likely listing a bunch.
4. You fix the raised issues (if possible) or leave a comment explaining why certain remarks cannot be addressed.
5. A bot confirms if everything is good to go, and marks your plugin as ready to review.
6. You wait.
7. An Obsidian developer review your code and likely leaves some remarks.
8. You fix the remarks.
9. An Obsidian developer confirms the changes and merges the pull request.
10. Congratulations, your plugin can now be found in the Community plugins tab in the Obsidian settings. Hurrah!

Sound pretty good, if a little involved, right? Well…

Currently, the time between a plugin's proposal and actually being included is easily a month, sometimes multiple months. I don't expect this to improve anytime soon. As the community grows, more plugins will be made that need to be manually reviewed. The Obsidian community is only getting bigger and, thanks to AI, plugin development has never been more accessible.

Then there is another, more pressing concern: **Plugin updates are not reviewed at all.**

Nothing is stopping any developer (or malicious actor gaining access to the account of a developer) of the nearly 2.500 plugins from pushing an update of a plugin that includes malicious code. Things such as:

- Copying your notes to a malicious actor.
- Reading configuration files from other plugins. These could contain API keys for things like GitHub or OpenAI, or passwords for services that an Obsidian plugin integrates to, like read-later apps.
- Downloading more malicious code or files.
- Deleting your notes.

And these are just a few examples.

We cannot expect the Obsidian theme to review every single change to every single plugin by hand. And we shouldn't.

### A reason for concern

You may be wondering, is there really much reason for concern? After all, community plugins are opt-in, have a warning label, the large majority of plugins are open source. What's the big deal?

I believe the workload for the Obsidian developers with regards to community plugins (and community themes for that matter) is way too high already. For a [project related to Quartz](https://github.com/saberzero1/quartz-themes), I was recently fetching and downloading every community theme available in Obsidian. To my frustration, about a quarter of them had severe syntax errors, making them hard to work with. Having recently proposed a plugin to the Obsidian release repository and having jumped through the hoops the bot asked me to, I wondered if similar checks were also performed on community themes.

So I asked in the community Discord server. According to one of the Obsidian developers, community themes are generally allowed if they don't break Obsidian and follow the [developer policies](https://docs.obsidian.md/Developer+policies#Not+allowed). I found that response puzzling, as I had seen several themes fetching network assets, **something the developer policies explicitly forbid**. Even a theme or two that had been approved just months before were loading assets over the network. When I pointed this out, the Obsidian developer said they would run some checks.

About a week later, I noticed that *one* theme had been removed from the list of community themes. So I wrote a script to check for network assets in the over 350 themes I had downloaded and followed the requirements on reporting policy violations. These policies state that, unless the violation is very severe, the author should get a week notice to fix any issues. So I went to the GitHub repositories of the themes in question and emailed my findings and the opened issues to the Obsidian support team.

To my surprise, about half of the themes already had issues raised by the Obsidian team. These issue were all raised well over a year before, telling the author to remove the network assets within 7 days, or be removed from the Obsidian theme list. Despite this, at the time of writing, **all reported themes are still available in the Obsidian theme browser**.

I hope that this example illustrates my concern: if the Obsidian team is not able to address policy violations on community themes within a year, how can the community expect the Obsidian team to deal with all the plugins? There are nearly ten times more plugins than themes and plugins have a way larger risk of malicious behavior than a theme fetching a font from Google or a background picture from Unsplash.

### Plugins are Obsidian

One could argue that community plugins are an optional part of Obsidian. I believe they are not optional **at all**. A lot of Obsidian users chose Obsidian over the many alternatives for the offline, privacy, and ownership of having local markdown files, but they didn't stay for that. They stayed for the amazing selection of plugins, themes, and the community built around it. And yes, there is a big warning when you go to the settings to enable community plugins, but a lot of what takes Obsidian from great to amazing *are* the plugins. Obsidian could never have been this successful without the amazing community creating plugins:

 - What would the TTRPG scene in Obsidian be like without all the amazing plugins to add dice rolls, character sheets, fantasy maps, stat blocks, etc.
 - What would task management be without all the amazing plugins adding calendars, tasks, reminders, etc.
 - What would the note taking experience be without all the amazing plugins integrating read-later apps, excalidraw, pdfs, ebooks, etc.
 - What would the blogging experience be without all the amazing plugins to streamline the process from note to website like Digital Garden, Enveloppe, etc.
 - What would the user experience be without all the amazing plugins enhancing themes and providing further customization, such as Style Settings, or adding features we want from a modern note taking app, such as Kanban, Database folder, Timelines, Settings search, etc.
 - [Even some core Obsidian features were once community plugins!](https://help.obsidian.md/credits#Plugin+inspirations).

I could go on and on, but my point is clear: If we want to keep this amazing plugin ecosystem, we need to address the issues that are slowly arising.

### Looking forward

So what is my proposal? Well, after praising the Obsidian community so much, it would only make sense to turn to that same community. So, to close off this post, a plea, and an invitation to the Obsidian team directly:

> **Dear Obsidian team.**
>
> **Let the community help. We are a community full of wonderful people. A lot of us are technical people. If the Obsidian team created a list of issues they are facing in the checking and maintain of community themes and plugins, I'm sure the community can come up with solutions. A lot of things can be (further) automated, both during the initial review, as well as when issues arise after a plugin or theme has been released. We all want to keep using Obsidian and keep making amazing things, but it only takes a handful of malicious plugins to completely wreck the community built around the plugin ecosystem. Tools like VS Code, Sublime, and Neovim show a community-driven approach can be done.**
>
> **We know your team is small. You simply do not have the capacity to deal with the plugin workload. I think it is time to start delegating more responsibilities to the community. Let us help you make Obsidian the best it can be.**
>
> **Please.**
>
> **Sincerely,**
>
> **saberzero1**
