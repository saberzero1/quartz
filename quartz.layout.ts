import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.MobileOnly(Component.PageTitle()), Component.MobileOnly(Component.Spacer())],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "❯ github": "https://github.com/saberzero1",
      "❯ whoami": "https://www.linkedin.com/in/emilebangma/",
      "❯ CV en-US": "https://rxresu.me/saberzero1/curriculum-vitae-english",
      "❯ CV nl-NL": "https://rxresu.me/saberzero1/curriculum-vitae-dutch",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta({ showReadingTime: false }),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.Search(),
    Component.Darkmode(),
    Component.MobileOnly(
      Component.ExplorerBurger({
        folderClickBehavior: "link",
        folderDefaultState: "collapsed",
        useSavedState: true,
        usePagePath: true,
        title: "",
      }),
    ),
    Component.DesktopOnly(
      Component.ExplorerBurger({
        folderClickBehavior: "link",
        folderDefaultState: "collapsed",
        useSavedState: true,
        usePagePath: true,
        title: "",
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: defaultContentPageLayout.beforeBody,
  left: defaultContentPageLayout.left,
  right: [],
}

// components for pages that display a single page (e.g. a single note)
/*export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.ExplorerBurger({
        folderClickBehavior: "link",
        folderDefaultState: "collapsed",
        useSavedState: true,
        usePagePath: true,
        title: "",
      }),
    ),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}*/

// components for pages that display lists of pages  (e.g. tags or folders)
/*export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}*/
