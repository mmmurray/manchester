import React from 'react'
import ToggleInput from '..'
import { render } from '../../../test-utils'

test('default value is empty', () => {
  const { getByLabelText } = render(<ToggleInput label="test input" />)

  const input = getByLabelText('test input') as HTMLInputElement

  expect(input.checked).toBe(false)
})

test('can set the current value', () => {
  const { getByLabelText } = render(
    <ToggleInput label="test input" value={true} />,
  )

  const input = getByLabelText('test input') as HTMLInputElement

  expect(input.checked).toBe(true)
})
