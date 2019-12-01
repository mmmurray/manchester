import React, { FC, useState } from 'react'
import ToggleInput from '.'
import { createComponentDocs } from '../../showcase/docs'

const Example: FC = () => {
  const [value, setValue] = useState(false)

  return <ToggleInput label="Enabled" value={value} onChange={setValue} />
}

export default createComponentDocs({
  component: ToggleInput,
  render: () => <Example />,
  props: {
    label: {
      description: '',
      value: 'Enabled',
    },
    value: {
      description: '',
      value: false,
    },
    onChange: {
      description: '',
      value: () => {},
    },
  },
})
