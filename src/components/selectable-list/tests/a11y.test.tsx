import React from 'react'
import SelectableList from '..'
import { Wrapper } from '../../../test-utils'

test('default selectable list a11y', async () => {
  await expect(
    <Wrapper>
      <SelectableList
        items={[
          { id: '1', title: 'Item 1' },
          { id: '2', title: 'Item 2' },
          { id: '3', title: 'Item 3' },
        ]}
      />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})

test('selectable list with button accessories a11y', async () => {
  await expect(
    <Wrapper>
      <SelectableList
        items={[
          {
            id: '1',
            title: 'Item 1',
            accessories: [
              <button key={1} type="button">
                B1
              </button>,
            ],
          },
          {
            id: '2',
            title: 'Item 2',
            accessories: [
              <button key={1} type="button">
                B2
              </button>,
            ],
          },
          {
            id: '3',
            title: 'Item 3',
            accessories: [
              <button key={1} type="button">
                B3
              </button>,
            ],
          },
        ]}
      />
    </Wrapper>,
  ).toMatchA11ySnapshot()
})
