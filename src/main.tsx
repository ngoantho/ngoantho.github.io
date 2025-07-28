import { render } from "preact"
import Index from "./index.md"
import "./main.css"
import "github-markdown-css/github-markdown.css"
import { Nav } from "./nav/nav"

render(<Index />, document.getElementsByTagName("main")[0])

render(<Nav />, document.getElementsByTagName("footer")[0])
