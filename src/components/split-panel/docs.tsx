import React, { FC, useState } from 'react'
import SplitPanel from '.'
import { createComponentDocs } from '../../showcase/docs'

const Example: FC = () => {
  const [leftSize, setLeftSize] = useState(200)

  return (
    <SplitPanel
      leftSize={leftSize}
      defaultLeftSize={200}
      onSizeChange={setLeftSize}
      leftPanel={
        <div
          style={{
            color: 'white',
            background: 'rgba(255, 255, 255, 0.22)',
            padding: '100px 10px',
          }}
        >
          Left
        </div>
      }
      rightPanel={
        <div
          style={{
            color: 'white',
            background: 'rgba(255, 255, 255, 0.22)',
            padding: '100px 10px',
          }}
        >
          Right
        </div>
      }
    />
  )
}

export default createComponentDocs({
  component: SplitPanel,
  render: () => <Example />,
  props: {
    children: {
      description: 'Text content',
      value: 'Manchester',
    },
    leftPanel: {
      description: '',
      value: null,
    },
    rightPanel: {
      description: '',
      value: null,
    },
    minLeftSize: {
      description: '',
      value: 0,
    },
    maxLeftSize: {
      description: '',
      value: 0,
    },
    defaultLeftSize: {
      description: '',
      value: 0,
    },
    leftSize: {
      description: '',
      value: 0,
    },
    onSizeChange: {
      description: '',
      value: leftSize => alert(leftSize),
    },
  },
})
