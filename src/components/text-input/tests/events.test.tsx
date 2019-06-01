import { fireEvent, render } from '../../../test-utils'
import React from 'react'
import TextInput from '..'

test('can handle change events', () => {
  const onChange = jest.fn()
  const { getByLabelText } = render(
    <TextInput label="test input" onChange={onChange} />,
  )

  fireEvent.change(getByLabelText('test input'), { target: { value: 'foo' } })

  expect(onChange.mock.calls).toEqual([['foo']])
})

test('change handler is optional', () => {
  const { getByLabelText } = render(<TextInput label="test input" />)

  fireEvent.change(getByLabelText('test input'), { target: { value: 'foo' } })
})
