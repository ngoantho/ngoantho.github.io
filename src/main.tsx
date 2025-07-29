import { render } from "preact"
import "./main.css"
import "github-markdown-css/github-markdown.css"
import Nav from "./nav/nav"
import IndexWrapper from "./index/index"

render(<IndexWrapper />, document.getElementsByTagName("main")[0])

render(<Nav />, document.getElementsByTagName("footer")[0])
