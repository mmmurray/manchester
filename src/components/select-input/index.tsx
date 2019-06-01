import React, { FC } from 'react'
import styled from 'styled-components'

type SelectInputProps = {
  label: string
  options: Array<{ name: string; value: string }>
  value?: string
  onChange?: (value: string) => void
}

const StyledSelect = styled.select``

const SelectInput: FC<SelectInputProps> = ({
  label,
  value,
  options,
  onChange = () => {},
}) => (
  <label>
    {label}
    <StyledSelect
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    >
      {options.map(({ name, value }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </StyledSelect>
  </label>
)

export default SelectInput
