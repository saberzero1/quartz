import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌟 Emile Bangma",
    enableSPA: true,
    enablePopovers: true,
    analytics: "plausible",
    baseUrl: "emilebangma.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "var(--shiki-color-background)",
          lightgray: "var(--shiki-color-background-lighter)",
          gray: "var(--shiki-token-comment)",
          darkgray: "var(--shiki-color-text)",
          dark: "var(--shiki-color-text-darker)",
          secondary: "var(--shiki-token-constant)",
          tertiary: "var(--shiki-token-string)",
          highlight: "rgba(225, 228, 232, 0.10)",
        },
        darkMode: {
          light: "var(--shiki-color-background)",
          lightgray: "var(--shiki-color-background-lighter)",
          gray: "var(--shiki-token-comment)",
          darkgray: "var(--shiki-color-text)",
          dark: "var(--shiki-color-text-darker)",
          secondary: "var(--shiki-token-constant)",
          tertiary: "var(--shiki-token-string)",
          highlight: "rgba(225, 228, 232, 0.10)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
