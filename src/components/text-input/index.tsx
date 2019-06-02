import React, { FC } from 'react'
import BaseInput from './base-input'

type TextInputProps = {
  label: string
  value?: string
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
