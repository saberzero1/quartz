import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🌟 Emile Bangma",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible"
    },
    locale: "en-US",
    baseUrl: "emilebangma.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "Fira Code",
      },
      colors: {
        lightMode: {
          light: "var(--mado-white-1)",
          lightgray: "var(--mado-gray-6)",
          gray: "var(--mado-gray-4)",
          darkgray: "var(--mado-black-2)",
          dark: "var(--mado-black-1)",
          secondary: "var(--mado-blue-1)",
          tertiary: "var(--mado-blue-2)",
          highlight: "rgba(225, 228, 232, 0.10)",
        },
        darkMode: {
          light: "var(--mado-white-1)",
          lightgray: "var(--mado-gray-6)",
          gray: "var(--mado-gray-4)",
          darkgray: "var(--mado-black-2)",
          dark: "var(--mado-black-1)",
          secondary: "var(--mado-blue-1)",
          tertiary: "var(--mado-blue-2)",
          highlight: "rgba(225, 228, 232, 0.10)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
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
