import React, { FC } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  onClick?: () => void
  fullWidth?: boolean
}

const StyledButton = styled.button<{ fullWidth: boolean }>`
  background: transparent;
  border: solid 3px currentColor;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  padding: 10px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  &:active,
  &:hover {
    color: ${({ theme }) => theme.accentColor};
    border-color: ${({ theme }) => theme.accentColor};
  }
`

const Button: FC<ButtonProps> = ({
  onClick = () => {},
  children,
  fullWidth = false,
}) => (
  <StyledButton type="button" onClick={() => onClick()} fullWidth={fullWidth}>
    {children}
  </StyledButton>
)

Button.displayName = 'Button'

export default Button
