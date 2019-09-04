import * as RTL from '@testing-library/react'
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme'

const Wrapper: FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children as any}</ThemeProvider>
)

const render = (el: React.ReactElement) => {
  const rendered = RTL.render(<Wrapper>{el}</Wrapper>)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const element = rendered.container.firstElementChild!

  return { ...rendered, element }
}

export * from '@testing-library/react'
export { render, Wrapper }
