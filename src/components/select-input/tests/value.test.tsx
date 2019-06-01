import React from 'react'
import SelectInput from '..'
import { render } from '../../../test-utils'

const options = [
  { name: 'A', value: 'a' },
  { name: 'B', value: 'b' },
  { name: 'C', value: 'c' },
]

test('default value is the first option', () => {
  const { getByLabelText } = render(
    <SelectInput label="test input" options={options} />,
  )

  const input = getByLabelText(/^test input/) as HTMLInputElement

  expect(input.value).toBe('a')
})

test('can set the current value', () => {
  const { getByLabelText } = render(
    <SelectInput label="test input" options={options} value="b" />,
  )

  const input = getByLabelText(/^test input/) as HTMLInputElement

  expect(input.value).toBe('b')
})
