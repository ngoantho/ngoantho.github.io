import Index from "./index.md"
import type { ComponentChildren } from "preact"
import "./index.scss"

function BlockQuote({ children }: { children: ComponentChildren }) {
  return <blockquote class="project card">{children}</blockquote>
}

export default function IndexWrapper() {
  return (
    <Index
      components={{
        blockquote: BlockQuote,
      }}
    />
  )
}
