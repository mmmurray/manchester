import React, { FC } from 'react'
import styled from 'styled-components'

type TextInputProps = {
  label: string
  value?: string
  onChange?: (value: string) => void
}

const StyledLabel = styled.label``

const StyledTextInput = styled.input``

const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange = () => {},
}) => (
  <StyledLabel>
    {label}
    <StyledTextInput
      type="text"
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
    />
  </StyledLabel>
)

export default TextInput
