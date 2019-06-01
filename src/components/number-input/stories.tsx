import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React, { FC, useState } from 'react'
import NumberInput from '.'

type StatefulNumberInputProps = {
  initialValue?: number
  min?: number
  max?: number
  step?: number
}

const StatefulNumberInput: FC<StatefulNumberInputProps> = ({
  initialValue,
  ...props
}) => {
  const [value, setValue] = useState(initialValue)
  const onChangeAction = action('change')

  return (
    <NumberInput
      {...props}
      label="Count"
      value={value}
      onChange={value => {
        onChangeAction(value)
        setValue(value)
      }}
    />
  )
}

storiesOf('number-input', module).add('empty', () => <StatefulNumberInput />)
storiesOf('number-input', module).add('with value', () => (
  <StatefulNumberInput initialValue={22} />
))
storiesOf('number-input', module).add('with range and step', () => (
  <StatefulNumberInput initialValue={10} min={10} max={100} step={10} />
))
