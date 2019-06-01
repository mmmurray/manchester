import React from 'react'
import TextInput from '..'
import { Wrapper } from '../../../test-utils'

test('default text input a11y', async () => {
  await expect(
    <Wrapper>
      <TextInput label="test" />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
