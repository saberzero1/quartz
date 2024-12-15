import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    //pageTitle: "🌷 Emile Bangma",
    pageTitle: "❯ Emile Bangma",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "emilebangma.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "published", //"modified",
    theme: {
      //fontOrigin: "googleFonts",
      fontOrigin: "local",
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
          textHighlight: "rgba(255, 228,232, 0.50)",
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
          textHighlight: "rgba(255, 228,232, 0.50)",
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
      //Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(/*{ enableFolderList: false }*/),
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
