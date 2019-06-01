import React from 'react'
import NumberInput from '..'
import { Wrapper } from '../../../test-utils'

test('default number input a11y', async () => {
  await expect(
    <Wrapper>
      <NumberInput label="test" />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
