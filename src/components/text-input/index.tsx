import React, { FC } from 'react'
import BaseInput from './base-input'

type TextInputProps = {
  /** Text describing the purpose of the input */
  label: string

  /** The current value of the input */
  value?: string

  /** Called with the current value each time it changes */
  onChange?: (value: string) => void
}

const TextInput: FC<TextInputProps> = ({
  label,
  value = '',
  onChange = () => {},
}) => (
  <BaseInput
    label={label}
    inputProps={{
      type: 'text',
      value,
      onChange: ({ target: { value } }) => onChange(value),
    }}
  />
)

export default TextInput
