import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, simplifySlug } from "../util/path"

function Backlinks({ fileData, allFiles, displayClass }: QuartzComponentProps) {
  const slug = simplifySlug(fileData.slug!)
  const backlinkFiles = allFiles.filter((file) => file.links?.includes(slug))
  return (
    <div class={`relative ${displayClass ?? ""}`}>
      <h3 class="m-0 text-base">Backlinks</h3>
      <ul class="dg-overflow list-none p-0 my-2">
        {backlinkFiles.length > 0 ? (
          backlinkFiles.map((f) => (
            <li>
              <a href={resolveRelative(fileData.slug!, f.slug!)} class="dg-internal bg-transparent">
                {f.frontmatter?.title}
              </a>
            </li>
          ))
        ) : (
          <li>No backlinks found</li>
        )}
      </ul>
    </div>
  )
}

export default (() => Backlinks) satisfies QuartzComponentConstructor
