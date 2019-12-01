import React, { FC, useState } from 'react'
import TextInput from '.'
import { createComponentDocs } from '../../showcase/docs'

const Example: FC = () => {
  const [value, setValue] = useState('')

  return <TextInput label="Name" value={value} onChange={setValue} />
}

export default createComponentDocs({
  component: TextInput,
  render: () => <Example />,
  props: {
    label: {
      description: '',
      value: 'Name',
    },
    value: {
      description: '',
      value: '',
    },
    onChange: {
      description: '',
      value: value => alert(value),
    },
  },
})
