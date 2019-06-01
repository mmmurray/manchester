import React from 'react'
import TextInput from '..'
import { render } from '../../../test-utils'

test('default value is empty', () => {
  const { getByLabelText } = render(<TextInput label="test input" />)

  const input = getByLabelText('test input') as HTMLInputElement

  expect(input.value).toBe('')
})

test('can set the current value', () => {
  const { getByLabelText } = render(
    <TextInput label="test input" value="foo" />,
  )

  const input = getByLabelText('test input') as HTMLInputElement

  expect(input.value).toBe('foo')
})
