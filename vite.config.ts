import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import mdx from "@mdx-js/rollup"

// https://vite.dev/config/
export default defineConfig({
  plugins: [mdx({ jsxImportSource: "preact" }), preact()],
})
