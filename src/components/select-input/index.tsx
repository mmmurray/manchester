import React, { FC } from 'react'
import styled from 'styled-components'

type SelectInputProps = {
  label: string
  options: Array<{ name: string; value: string }>
  value?: string
  onChange?: (value: string) => void
}

const StyledLabel = styled.label`
  align-items: center;
  display: flex;
  position: relative;
`

const StyledLabelSpan = styled.span`
  font-size: 16px;
  margin-right: 10px;
`

const StyledSelect = styled.select`
  appearance: none;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border-radius: 0;
  border: solid 3px ${({ theme }) => theme.colors.secondaryForeground};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  display: block;
  flex-grow: 1;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
`

const Arrow = styled.div`
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid ${({ theme }) => theme.colors.secondaryForeground};
  height: 0;
  pointer-events: none;
  position: absolute;
  right: 12px;
  top: calc(50% - 4px);
  width: 0;
`

const SelectInput: FC<SelectInputProps> = ({
  label,
  value,
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

export default SelectInput
