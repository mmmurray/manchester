import React, { FC, useState } from 'react'
import NumberInput from '.'
import { createComponentDocs } from '../../showcase/docs'

const Example: FC = () => {
  const [value, setValue] = useState<number | undefined>()

  return <NumberInput label="Count" value={value} onChange={setValue} />
}

export default createComponentDocs({
  component: NumberInput,
  render: () => <Example />,
  props: {
    label: {
      description: 'Text content',
      value: 'Count',
    },
    value: {
      description: 'Current value',
      value: 0,
    },
    onChange: {
      description: 'Called when the value changes',
      value: value => alert(value),
    },
    min: {
      description: 'Minimum value',
      value: 0,
    },
    max: {
      description: 'Maximum value',
      value: 100,
    },
    step: {
      description: 'Amount to change the value by each increment',
      value: 1,
    },
  },
})
