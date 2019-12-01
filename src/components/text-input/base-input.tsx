import React, { FC, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

type BaseInputProps = {
  label: string
  inputProps: InputHTMLAttributes<HTMLInputElement>
}

const transitionTime = 0.2

const StyledContainer = styled.div`
  padding: 20px 0 0 0;
`

const StyledLabel = styled.label`
  display: block;
  position: relative;
`

const StyledTextInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: solid 3px currentColor;
  color: inherit;
  display: block;
  font-size: 24px;
  width: 100%;
  transition: border ${transitionTime}s;

  &:focus {
    border-bottom-color: ${({ theme }) => theme.accentColor};
    outline: none;
  }
`

const StyledLabelSpan = styled.span`
  font-size: 24px;
  left: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transform-origin: top left;
  transition: transform ${transitionTime}s, color ${transitionTime}s;
  color: ${({ theme }) => theme.mutedForegroundColor};

  ${StyledTextInput}:focus + &,
  ${StyledTextInput}:not([value=""]) + & {
    transform: scale(0.6) translate(0, -30px);
  }
`

const BaseInput: FC<BaseInputProps> = ({ label, inputProps }) => (
  <StyledContainer>
    <StyledLabel>
      <StyledTextInput {...inputProps} />
      <StyledLabelSpan>{label}</StyledLabelSpan>
    </StyledLabel>
  </StyledContainer>
)

export default BaseInput
