import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.MobileOnly(Component.PageTitle()), Component.MobileOnly(Component.Spacer())],
  afterBody: [],
  footer: Component.Footer({
    links: {
      github: "https://github.com/saberzero1",
      linkedin: "https://www.linkedin.com/in/emilebangma/",
      cv_white: "https://rxresu.me/saberzero1/curriculum-vitae-english",
      cv_black: "https://rxresu.me/saberzero1/curriculum-vitae-dutch",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: true,
      mapFn: (node) => {
        return node
      },
      sortFn: (a, b) => {
        // Sort order: folders first, then files. Sort folders and files alphabeticall
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
          // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) {
          return 1
        } else {
          return -1
        }
      },
      filterFn: (node) => node.slugSegment !== "tags",
      order: ["filter", "map", "sort"],
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      folderDefaultState: "collapsed",
      folderClickBehavior: "link",
      useSavedState: true,
      mapFn: (node) => {
        return node
      },
      sortFn: (a, b) => {
        // Sort order: folders first, then files. Sort folders and files alphabeticall
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
          // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && b.isFolder) {
          return 1
        } else {
          return -1
        }
      },
      filterFn: (node) => node.slugSegment !== "tags",
      order: ["filter", "map", "sort"],
    }),
  ],
  right: [],
}
