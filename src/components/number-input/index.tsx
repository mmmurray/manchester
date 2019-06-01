import React, { FC } from 'react'
import BaseInput from '../text-input/base-input'

type NumberInputProps = {
  label: string
  value?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}

const NumberInput: FC<NumberInputProps> = ({
  label,
  value,
  min,
  max,
  step,
  onChange = () => {},
}) => (
  <BaseInput
    label={label}
    inputProps={{
      type: 'number',
      min,
      max,
      step,
      value: value ? String(value) : '',
      onChange: ({ target: { value } }) => onChange(Number(value)),
    }}
  />
)

export default NumberInput
