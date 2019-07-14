import React, { FC } from 'react'
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

const Wrapper: FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <FauxGlobal>{children}</FauxGlobal>
  </ThemeProvider>
)

export default Wrapper
