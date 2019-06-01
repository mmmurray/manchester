import * as RTL from '@testing-library/react'
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme'

const Wrapper: FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children as any}</ThemeProvider>
)

const render = (el: React.ReactElement) => RTL.render(<Wrapper>{el}</Wrapper>)

export * from '@testing-library/react'
export { render, Wrapper }
