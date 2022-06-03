type Dispose = () => void
type InsertCssItem = () => Dispose
type GetCSSItem = () => string
type GetContent = () => string

interface Style {
  [key: string]: InsertCssItem | GetCSSItem | GetContent | string
  _insertCss: InsertCssItem
  _getCss: GetCSSItem
  _getContent: GetContent
}

type Styles = {
  [key: string]: string
}

declare module 'isomorphic-style-loader/useStyles' {
  export interface Styles {
    [key: string]: string
  }
  function useStyles(...styles: Styles[]): void
  export default useStyles
}

declare module 'isomorphic-style-loader/StyleContext' {
  import { Context } from 'react'

  type RemoveGlobalCss = () => void
  type InsertCSS = (...styles: Style[]) => RemoveGlobalCss | void
  interface StyleContextValue {
    insertCss: InsertCSS
  }

  const StyleContext: Context<StyleContextValue>

  export { StyleContext as default, InsertCSS }
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.css' {
  const value: Styles

  export = value
}
declare module '*.module.css'
