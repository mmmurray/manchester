import React from 'react'
import ToggleInput from '..'
import { Wrapper } from '../../../test-utils'

test('default toggle input a11y', async () => {
  await expect(
    <Wrapper>
      <ToggleInput label="test" />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})

test('checked toggle input a11y', async () => {
  await expect(
    <Wrapper>
      <ToggleInput label="test" value={true} />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
