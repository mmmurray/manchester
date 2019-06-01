import React from 'react'
import NumberInput from '..'
import { render } from '../../../test-utils'

test('default value is empty', () => {
  const { getByLabelText } = render(<NumberInput label="test input" />)

  const input = getByLabelText('test input') as HTMLInputElement

  expect(input.value).toBe('')
})

test('can set the current value', () => {
  const { getByLabelText } = render(
    <NumberInput label="test input" value={123} />,
  )

  const input = getByLabelText('test input') as HTMLInputElement

  expect(input.value).toBe('123')
})
