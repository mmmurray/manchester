import React, { FC } from 'react'
import styled from 'styled-components'

type TextInputProps = {
  label: string
  onChange?: (value: string) => void
}

const StyledLabel = styled.label``

const StyledTextInput = styled.input``

const TextInput: FC<TextInputProps> = ({ label, onChange = () => {} }) => (
  <StyledLabel>
    {label}
    <StyledTextInput
      type="text"
      onChange={({ target: { value } }) => onChange(value)}
    />
  </StyledLabel>
)

export default TextInput
