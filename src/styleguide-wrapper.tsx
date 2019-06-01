import React, { FC } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme'

const FauxGlobal = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
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
