import React, { FC } from 'react'
import styled, {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from 'styled-components'
import Surface from '../components/surface'
import { defaultTheme } from '../theme'

type AppProps = {
  theme?: DefaultTheme
  layout?: 'default' | 'app'
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #333;
    color: #aaa;
  }
`

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const App: FC<AppProps> = ({
  children,
  theme = defaultTheme,
  layout = 'default',
}) => {
  const content = <Surface>{children as any}</Surface>

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {layout === 'app' ? <StyledOverlay>{content}</StyledOverlay> : content}
      </>
    </ThemeProvider>
  )
}

export default App
