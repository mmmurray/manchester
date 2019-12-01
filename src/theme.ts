import { useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'
import { palette } from './palette'

const defaultTheme: DefaultTheme = {
  accentColor: palette['Nuclear Green'],
  backgroundColor: palette['Slate Grey'],
  foregroundColor: palette['Pure White'],
  mutedForegroundColor: palette['Ash Grey'],
  layers: [
    {
      backgroundColor: palette['Concrete Grey'],
      foregroundColor: palette['Slate Grey'],
      mutedForegroundColor: palette['Pure White'],
    },
  ],
}

const useTheme = () => useContext(ThemeContext)

export { defaultTheme, useTheme }
