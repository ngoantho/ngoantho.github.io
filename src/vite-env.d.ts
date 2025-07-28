/// <reference types="vite/client" />

declare module '*.md' {
  import { ComponentType } from 'preact'
  const component: ComponentType<any>
  export default component
}