import React, { FC } from 'react'
import styled from 'styled-components'

type SelectInputProps = {
  /** Text describing the purpose of the input */
  label: string

  /** Ordered list containing all options that can be selected */
  options: { name: string; value: string }[]

  /** The current value of the input */
  value?: string

  /** Called with the current value each time it changes */
  onChange?: (value: string) => void
}

const StyledLabel = styled.label`
  align-items: center;
  display: flex;
  position: relative;
`

const StyledLabelSpan = styled.span`
  color: inherit;
  font-size: 16px;
  margin-right: 10px;
`

const StyledSelect = styled.select`
  appearance: none;
  background: transparent;
  border-radius: 0;
  border: solid 3px currentColor;
  color: inherit;
  display: block;
  flex-grow: 1;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;

  &:focus {
    border-color: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.accentColor};
    outline: none;
  }
`

const Arrow = styled.div`
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid currentColor;
  height: 0;
  pointer-events: none;
  position: absolute;
  right: 12px;
  top: calc(50% - 4px);
  width: 0;

  ${StyledSelect}:focus + & {
    border-top-color: ${({ theme }) => theme.accentColor};
  }
`

const SelectInput: FC<SelectInputProps> = ({
  label,
  value = '',
  options,
  onChange = () => {},
}) => (
  <StyledLabel>
    <StyledLabelSpan>{label}</StyledLabelSpan>
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
    <Arrow />
  </StyledLabel>
)

SelectInput.displayName = 'SelectInput'

export default SelectInput
