import React from 'react'
import RichText from '..'
import { render } from '../../../test-utils'

test('can render children', () => {
  const { getByText } = render(
    <RichText>
      <h1>Hello</h1>
      <h2>World</h2>
      <p>Lorem ipsum</p>
    </RichText>,
  )

  getByText('Hello')
  getByText('World')
  getByText('Lorem ipsum')
})
