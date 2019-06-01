import { addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'

const req = require.context('../src/components', true, /\/stories.tsx$/)

function loadStories() {
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
