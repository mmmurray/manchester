import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React, { FC, useState } from 'react'
import TextInput from '.'

type StatefulTextInputProps = {
  initialValue?: string
}

const StatefulTextInput: FC<StatefulTextInputProps> = ({
  initialValue = '',
}) => {
  const [value, setValue] = useState(initialValue)
  const onChangeAction = action('change')

  return (
    <TextInput
      label="Full name"
      value={value}
      onChange={value => {
        onChangeAction(value)
        setValue(value)
      }}
    />
  )
}

storiesOf('text-input', module).add('empty', () => <StatefulTextInput />)
storiesOf('text-input', module).add('with value', () => (
  <StatefulTextInput initialValue="Alan Turing" />
))
