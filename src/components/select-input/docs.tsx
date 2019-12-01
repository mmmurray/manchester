import React, { FC, useState } from 'react'
import SelectInput from '.'
import { createComponentDocs } from '../../showcase/docs'

const Example: FC = () => {
  const [value, setValue] = useState<string | undefined>()

  return (
    <SelectInput
      label="Fruit"
      value={value}
      options={[
        { name: 'Apple', value: 'apple' },
        { name: 'Banana', value: 'banana' },
        { name: 'Grape', value: 'grape' },
        { name: 'Mango', value: 'mango' },
        { name: 'Watermelon', value: 'watermelon' },
      ]}
      onChange={setValue}
    />
  )
}

export default createComponentDocs({
  component: SelectInput,
  render: () => <Example />,
  props: {
    label: {
      description: '',
      value: 'Colour',
    },
    options: {
      description: '',
      value: [],
    },
    value: {
      description: '',
      value: 'apple',
    },
    onChange: {
      description: '',
      value: value => alert(value),
    },
  },
})
