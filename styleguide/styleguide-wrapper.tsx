import React, { FC, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/theme'

const FauxGlobal = styled.div`
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 20px;

  & * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`

const useRemoveGlobalCursorResetHack = () => {
  useEffect(() => {
    const styleElement = document.querySelector(
      '[data-meta="jss-isolate"]',
    ) as (HTMLStyleElement & { cursorRemoved?: boolean })

    if (!styleElement.cursorRemoved) {
      styleElement.cursorRemoved = true
      ;(styleElement.sheet as any).rules[0].style.cursor = 'inherit'
    }
  }, [])
}

const Wrapper: FC = ({ children }) => {
  useRemoveGlobalCursorResetHack()

  return (
    <ThemeProvider theme={defaultTheme}>
      <FauxGlobal>{children}</FauxGlobal>
    </ThemeProvider>
  )
}

export default Wrapper
