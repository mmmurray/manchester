import React from 'react'
import SplitPanel from '..'
import { Wrapper } from '../../../test-utils'

test('default split panel a11y', async () => {
  await expect(
    <Wrapper>
      <SplitPanel
        leftPanel={<div>Test Left Panel</div>}
        rightPanel={<div>Test Right Panel</div>}
      />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
