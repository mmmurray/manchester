import React, { FC, useState } from 'react'
import SelectableList from '.'
import { createComponentDocs } from '../../showcase/docs'

const items = ['Item 1', 'Item 2', 'Item 3']

const Example: FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  return (
    <SelectableList
      items={items.map((title, id) => ({
        id: `${id}`,
        title,
        selected: id === selectedId,
        onClick: () => {
          setSelectedId(id)
        },
      }))}
    />
  )
}

export default createComponentDocs({
  component: SelectableList,
  render: () => <Example />,
  props: {
    items: {
      description: '',
      value: items.map((title, id) => ({
        id: `${id}`,
        title,
        selected: false,
        onClick: () => {},
      })),
    },
  },
})
