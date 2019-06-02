import React, { FC } from 'react'
import BaseInput from '../text-input/base-input'

type NumberInputProps = {
  /** Text describing the purpose of the input */
  label: string

  /** The current value of the input */
  value?: number

  /** The minimum value that can be inputted */
  min?: number

  /** The maximum value that can be inputted */
  max?: number

  /** The stepping interval used when adjusting with the up and down arrows */
  step?: number

  /** Called with the current value each time it changes */
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
