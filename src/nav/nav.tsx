import "./nav.css"

function normalize(header: string) {
  return header
    .trim() // Remove leading/trailing whitespace
    .toLowerCase() // Convert to lowercase
    .replaceAll(" ", "-") // Replace spaces with hyphens
}

export function Nav() {
  const headers = document.getElementsByTagName("main")[0].querySelectorAll("h2")

  return (
    <ol>
      <li>
        <a href="#top">➡️Contact</a>
      </li>
      {Array.from(headers).map((header) => {
        header.id = normalize(header.textContent)
        return (
          <li>
            <a href={`#${header.id}`}>{`➡️${header.textContent}`}</a>
          </li>
        )
      })}
    </ol>
  )
}
