import { addDecorator, addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/theme'

const req = require.context('../src/components', true, /\/stories.tsx$/)

const Global = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.primaryBackground};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }
`

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>
    <>
      <Global />
      {storyFn()}
    </>
  </ThemeProvider>
)

function loadStories() {
  addDecorator(ThemeDecorator)

  req.keys().forEach(filename => req(filename))
}

addParameters({
  options: {
    name: 'Manchester',
    url: 'https://github.com/mmmurray/manchester',
    theme: themes.dark,
  },
})

configure(loadStories, module)
