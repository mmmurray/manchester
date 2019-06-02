import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBackground: string
      primaryForeground: string
      primarySupplementary: string
      primaryAccent: string
      secondaryBackground: string
      secondaryForeground: string
      secondarySupplementary: string
    }
  }
}
