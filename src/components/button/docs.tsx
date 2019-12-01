import React, { FC, useState } from 'react'
import Button from '.'
import { createComponentDocs } from '../../showcase/docs'

const Example: FC = () => {
  const [value, setValue] = useState<number>(0)

  return (
    <Button
      onClick={() => {
        setValue(currentValue => currentValue + 1)
      }}
    >
      {value === 0
        ? 'Standard Button'
        : `Clicked ${value} time${value === 1 ? '' : 's'}`}
    </Button>
  )
}
export default createComponentDocs({
  component: Button,
  render: () => <Example />,
  props: {
    children: { description: 'Text content', value: 'Standard Button' },
    fullWidth: { description: 'Render full width', value: false },
    onClick: {
      description: 'Called each time the button is clicked',
      value: () => {},
    },
  },
})
