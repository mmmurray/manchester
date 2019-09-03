import React from 'react'
import SplitPanel from '..'
import { Wrapper } from '../../../test-utils'

test('default split panel a11y', async () => {
  await expect(
    <Wrapper>
      <SplitPanel />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
