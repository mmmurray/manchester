import React from 'react'
import SelectableList from '..'
import { render } from '../../../test-utils'

test('can render items', () => {
  const { getByText } = render(
    <SelectableList
      items={[
        { id: '1', title: 'Item 1', selected: true },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
      ]}
    />,
  )

  getByText('Item 1')
  getByText('Item 2')
  getByText('Item 3')
})

test('can render items with accessories', () => {
  const { getByText } = render(
    <SelectableList
      items={[
        {
          id: '1',
          title: 'Item 1',
          selected: true,
          accessories: [
            <span key={1}>Accessory 1A</span>,
            <span key={2}>Accessory 1B</span>,
          ],
        },
        {
          id: '2',
          title: 'Item 2',
          accessories: [
            <span key={1}>Accessory 2A</span>,
            <span key={2}>Accessory 2B</span>,
          ],
        },
        {
          id: '3',
          title: 'Item 3',
          accessories: [
            <span key={1}>Accessory 3A</span>,
            <span key={2}>Accessory 3B</span>,
          ],
        },
      ]}
    />,
  )

  getByText('Accessory 1A')
  getByText('Accessory 1B')
  getByText('Accessory 2A')
  getByText('Accessory 2B')
  getByText('Accessory 3A')
  getByText('Accessory 3B')
})
