import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <h1 class="article-title">Jeremiah 40:4</h1>
      <p>
        But today I am freeing you from the chains on your wrists. Come with me to Babylon, if you
        like, and I will look after you; but if you do not want to, then don't come. Look, the whole
        country lies before you; go wherever you please.
      </p>
      <p>
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="5 8 14 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            transform="rotate(90)"
            class="folder-icon"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          Return home
        </a>
      </p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
