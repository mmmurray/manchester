import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React, { FC, useState } from 'react'
import SelectInput from '.'

type StatefulSelectInputProps = {}

const options = [
  { name: 'Apple', value: 'apple' },
  { name: 'Banana', value: 'banana' },
  { name: 'Grape', value: 'grape' },
  { name: 'Mango', value: 'mango' },
  { name: 'Watermelon', value: 'watermelon' },
]

const StatefulSelectInput: FC<StatefulSelectInputProps> = () => {
  const [value, setValue] = useState()
  const onChangeAction = action('change')

  return (
    <SelectInput
      label="Fruit"
      options={options}
      value={value}
      onChange={value => {
        onChangeAction(value)
        setValue(value)
      }}
    />
  )
}

storiesOf('select-input', module).add('empty', () => <StatefulSelectInput />)
