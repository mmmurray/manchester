import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBackground: string
      primaryForeground: string
      secondaryBackground: string
      secondaryForeground: string
    }
  }
}
