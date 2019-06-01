import React from 'react'
import Button from '..'
import { Wrapper } from '../../../test-utils'

test('default button a11y', async () => {
  await expect(
    <Wrapper>
      <Button>test button</Button>
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
