import React, { FC } from 'react'
import styled from 'styled-components'

type NumberInputProps = {
  label: string
  value?: number
  min?: number
  max?: number
  step?: number
  onChange?: (value: number) => void
}

const transitionTime = 0.2

const StyledContainer = styled.div`
  padding: 20px 0 0 0;
`

const StyledLabel = styled.label`
  display: block;
  position: relative;
`

const StyledNumberInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: solid 3px ${({ theme }) => theme.colors.secondarySupplementary};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  display: block;
  font-size: 24px;
  width: 100%;
  transition: border ${transitionTime}s;

  &:focus,
  &:not([value='']) {
    border-bottom-color: ${({ theme }) => theme.colors.secondaryForeground};
  }
`

const StyledLabelSpan = styled.span`
  font-size: 24px;
  left: 0;
  position: absolute;
  top: 0;
  transform-origin: top left;
  transition: transform ${transitionTime}s, color ${transitionTime}s;
  color: ${({ theme }) => theme.colors.secondarySupplementary};

  ${StyledNumberInput}:focus + &,
  ${StyledNumberInput}:not([value=""]) + & {
    transform: scale(0.6) translate(0, -30px);
  }
`

const NumberInput: FC<NumberInputProps> = ({
  label,
  value,
  min,
  max,
  step,
  onChange = () => {},
}) => (
  <StyledContainer>
    <StyledLabel>
      <StyledNumberInput
        type="number"
        min={min}
        max={max}
        step={step}
        value={value ? String(value) : ''}
        onChange={({ target: { value } }) => onChange(Number(value))}
      />
      <StyledLabelSpan>{label}</StyledLabelSpan>
    </StyledLabel>
  </StyledContainer>
)

export default NumberInput
