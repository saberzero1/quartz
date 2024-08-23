import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`status-bar${" " + (displayClass ?? "")}`}>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li class="status-bar-item">
              <a class="status-bar-item-normal" href={link}>
                {text}
              </a>
              <a class="status-bar-item-mobile" href={link}>
                <div class="status-bar-item-icon" data-icon={text}></div>
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
