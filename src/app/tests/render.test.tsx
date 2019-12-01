import React from 'react'
import App from '..'
import { render } from '../../test-utils'

test('can render app with default layout', () => {
  const { getByText } = render(
    <App>
      <span>foo</span>
    </App>,
  )

  getByText('foo')
})

test('can render app with app layout', () => {
  const { getByText } = render(
    <App layout="app">
      <span>foo</span>
    </App>,
  )

  getByText('foo')
})
