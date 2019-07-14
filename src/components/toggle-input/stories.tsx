import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React, { FC, useState } from 'react'
import ToggleInput from '.'

type StatefulToggleInputProps = {
  initialValue?: boolean
}

const StatefulToggleInput: FC<StatefulToggleInputProps> = ({
  initialValue = false,
}) => {
  const [value, setValue] = useState(initialValue)
  const onChangeAction = action('change')

  return (
    <ToggleInput
      label="Toggle"
      value={value}
      onChange={value => {
        onChangeAction(value)
        setValue(value)
      }}
    />
  )
}

storiesOf('toggle-input', module).add('false', () => <StatefulToggleInput />)
storiesOf('toggle-input', module).add('true', () => (
  <StatefulToggleInput initialValue={true} />
))
