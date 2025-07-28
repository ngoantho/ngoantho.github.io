import { render } from 'preact'
import Markdown from './index.md'
import "./main.css"
import "github-markdown-css/github-markdown.css"
import { useEffect, useRef } from 'preact/hooks'

function App() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    if (!ref.current) return
    ref.current.querySelectorAll("h2").forEach((el) => {
      console.log(el)
    })
  }, [])

  return <main ref={ref}>
    <Markdown />
  </main>
}

render(<App />, document.body)
