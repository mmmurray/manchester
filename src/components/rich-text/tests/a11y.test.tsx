import React from 'react'
import RichText from '..'
import { Wrapper } from '../../../test-utils'

test('default rich text a11y', async () => {
  await expect(
    <Wrapper>
      <RichText>
        <h1>Hello</h1>
        <h2>World</h2>
        <p>Lorem ipsum</p>
      </RichText>
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
