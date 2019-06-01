import { addDecorator, addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/theme'

const req = require.context('../src/components', true, /\/stories.tsx$/)

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>
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
