import Index from "./index.md"
import { type ComponentChildren } from "preact"
import "./index.css"

function BlockQuote({ children }: { children: ComponentChildren }) {
  return <blockquote class="card">{children}</blockquote>
}

function Anchor({ children, ...props }: { children: ComponentChildren }) {
  return <a class="button" {...props}>{children}</a>
}

export default function IndexWrapper() {
  return (
    <Index
      components={{
        blockquote: BlockQuote,
        a: Anchor
      }}
    />
  )
}
