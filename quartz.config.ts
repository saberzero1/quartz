import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌷 Emile Bangma",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "emilebangma.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "var(--obsidian-zero-base)",
          lightgray: "var(--obsidian-zero-surface2)",
          gray: "var(--obsidian-zero-overlay2)",
          darkgray: "var(--obsidian-zero-subtext1)",
          dark: "var(--obsidian-zero-text)",
          secondary: "var(--obsidian-zero-blue)",
          tertiary: "var(--obsidian-zero-lavender)",
          highlight: "var(--obsidian-zero-highlight)",
          textHighlight: "var(--obsidian-zero-text-highlight)",
        },
        darkMode: {
          light: "var(--obsidian-zero-base)",
          lightgray: "var(--obsidian-zero-surface0)",
          gray: "var(--obsidian-zero-overlay0)",
          darkgray: "var(--obsidian-zero-subtext0)",
          dark: "var(--obsidian-zero-text)",
          secondary: "var(--obsidian-zero-blue)",
          tertiary: "var(--obsidian-zero-lavender)",
          highlight: "var(--obsidian-zero-highlight)",
          textHighlight: "var(--obsidian-zero-text-highlight)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "absolute" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({ enableFolderList: true }),
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
