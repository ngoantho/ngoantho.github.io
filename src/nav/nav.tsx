import type { TargetedEvent } from "preact/compat"
import "./nav.css"
import { useRef } from "preact/hooks"

function normalize(header: string) {
  return header
    .trim() // Remove leading/trailing whitespace
    .toLowerCase() // Convert to lowercase
    .replaceAll(" ", "-") // Replace spaces with hyphens
}

export default function Nav() {
  let ref = useRef(document.getElementsByTagName("main")[0])
  let headers = Array.from(ref.current.querySelectorAll("h2")).map((header) => {
    header.id = normalize(header.textContent ?? "")
    return {
      href: `#${header.id}`,
      text: `➡️${header.textContent}`
    }
  })

  function onSelect(e: TargetedEvent<HTMLSelectElement>) {
    location.assign((e.target as HTMLSelectElement).value);
    (e.target as HTMLSelectElement).value = "menu"
  }

  return (
    <>
      <ol>
        {headers.map(({ href, text }) => (
          <li>
            <a href={href} class="button">{text}</a>
          </li>
        ))}
      </ol>
      <select title="Menu" onChange={onSelect} defaultValue="menu">
        <option value="menu" hidden>Menu</option>
        {headers.map(({ href, text }) => (
          <option value={href}>{text}</option>
        ))}
      </select>
    </>
  )
}
