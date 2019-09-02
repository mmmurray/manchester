import { fireEvent, render } from '../../../test-utils'
import React from 'react'
import ToggleInput from '..'

test('can handle change events', () => {
  const onChange = jest.fn()
  const { getByLabelText } = render(
    <ToggleInput label="test input" onChange={onChange} />,
  )

  fireEvent.click(getByLabelText('test input'))

  expect(onChange.mock.calls).toEqual([[true]])
})

test('change handler is optional', () => {
  const { getByLabelText } = render(<ToggleInput label="test input" />)

  fireEvent.click(getByLabelText('test input'))
})
