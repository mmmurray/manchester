import React from 'react'
import SelectInput from '..'
import { Wrapper } from '../../../test-utils'

const options = [
  { name: 'A', value: 'a' },
  { name: 'B', value: 'b' },
  { name: 'C', value: 'c' },
]

test('default select input a11y', async () => {
  await expect(
    <Wrapper>
      <SelectInput label="test" options={options} />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
