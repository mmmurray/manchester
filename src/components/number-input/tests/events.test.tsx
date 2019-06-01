import { fireEvent, render } from '../../../test-utils'
import React from 'react'
import NumberInput from '..'

test('can handle change events', () => {
  const onChange = jest.fn()
  const { getByLabelText } = render(
    <NumberInput label="test input" onChange={onChange} />,
  )

  fireEvent.change(getByLabelText('test input'), { target: { value: '123' } })

  expect(onChange.mock.calls).toEqual([[123]])
})

test('change handler is optional', () => {
  const { getByLabelText } = render(<NumberInput label="test input" />)

  fireEvent.change(getByLabelText('test input'), { target: { value: '123' } })
})
