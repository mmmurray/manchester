import React from 'react'
import Headline from '..'
import { Wrapper } from '../../../test-utils'

test('default headline a11y', async () => {
  await expect(
    <Wrapper>
      <Headline>test headline</Headline>
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
