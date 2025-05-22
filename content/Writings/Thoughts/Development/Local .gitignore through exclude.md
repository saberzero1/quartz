---
{"publish":true,"title":"Local .gitignore through exclude","description":"I recently learned that a local-only gitignore is possible through .git/info/exclude.","created":"2024-10-03T21:11:46.192+02:00","modified":"2025-02-19T01:18:26.116+01:00","tags":["Thoughts/Development","Tools/Git"],"cssclasses":"mado-heading"}
---


Ever wanted a local `.gitignore` file? For example to prevent accidentally pushing a bunch of test files to the remote repository?

I recently learned that there is a small file inside every `.git` folder that does exactly that.

Introducing: `.git/info/exclude`.

By default the file looks like this:

```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
```

Personally, I like to keep a [justfile](https://just.systems/man/en/) inside my repositories for project-specific commands that I execute regularly. To prevent accidentally pushing the justfile, I can add it to `.git/info/exclude` like so:

```
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~

justfile
```

In fact, every option that is valid for a `.gitignore` file, is valid for a `.git/info/exclude` file. [They even share a page in the Git documentation](https://git-scm.com/docs/gitignore#_synopsis)

<!--
https://luisdalmolin.dev/blog/ignoring-files-in-git-without-gitignore/
-->
