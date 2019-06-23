import React from 'react'
import SelectInput from '..'
import { fireEvent, render } from '../../../test-utils'

const options = [
  { name: 'A', value: 'a' },
  { name: 'B', value: 'b' },
  { name: 'C', value: 'c' },
]

test('can handle change events', () => {
  const onChange = jest.fn()
  const { getByLabelText } = render(
    <SelectInput label="test input" options={options} onChange={onChange} />,
  )

  fireEvent.change(getByLabelText(/^test input/), { target: { value: 'b' } })

  expect(onChange.mock.calls).toEqual([['b']])
})

test('change handler is optional', () => {
  const { getByLabelText } = render(
    <SelectInput label="test input" options={options} />,
  )

  fireEvent.change(getByLabelText(/^test input/), { target: { value: 'b' } })
})
