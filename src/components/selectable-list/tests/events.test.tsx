import React from 'react'
import SelectableList from '..'
import { fireEvent, render } from '../../../test-utils'

test('can handle item click events', () => {
  const onClick = jest.fn()

  const { getByText } = render(
    <SelectableList items={[{ id: '1', title: 'Item 1', onClick }]} />,
  )

  const button = getByText('Item 1')

  fireEvent.click(button)

  expect(onClick.mock.calls).toEqual([[]])
})

test('item click handler is optional', () => {
  const { getByText } = render(
    <SelectableList items={[{ id: '1', title: 'Item 1' }]} />,
  )

  const button = getByText('Item 1')

  fireEvent.click(button)
})
