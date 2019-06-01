import React from 'react'
import NumberInput from '..'
import { render } from '../../../test-utils'

test('default ranges', () => {
  const { getByLabelText } = render(<NumberInput label="test input" />)

  const input = getByLabelText('test input') as HTMLInputElement

  expect(input.min).toBe('')
  expect(input.max).toBe('')
  expect(input.step).toBe('')
})

test('custom ranges', () => {
  const { getByLabelText } = render(
    <NumberInput label="test input" value={123} min={5} max={54} step={7} />,
  )

  const input = getByLabelText('test input') as HTMLInputElement

  expect(input.min).toBe('5')
  expect(input.max).toBe('54')
  expect(input.step).toBe('7')
})
