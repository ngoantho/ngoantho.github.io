import "./nav.css"
import { useRef } from "preact/hooks"

function normalize(header: string) {
  return header
    .trim() // Remove leading/trailing whitespace
    .toLowerCase() // Convert to lowercase
    .replaceAll(" ", "-") // Replace spaces with hyphens
}

export function Nav() {
  let ref = useRef(document.getElementsByTagName("main")[0])
  let headers = ref.current.querySelectorAll("h2")

  return (
    <ol>
      {Array.from(headers).map((header) => {
        header.id = normalize(header.textContent ?? "")
        return (
          <li>
            <a href={`#${header.id}`}>{`➡️${header.textContent}`}</a>
          </li>
        )
      })}
    </ol>
  )
}
