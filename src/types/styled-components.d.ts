import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    accentColor: string
    backgroundColor: string
    foregroundColor: string
    mutedForegroundColor: string
    layers: {
      backgroundColor: string
      foregroundColor: string
      mutedForegroundColor: string
    }[]
  }
}
