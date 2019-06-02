import React, { FC } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  /** Called each time the button is clicked */
  onClick?: () => void
}

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.secondaryBackground};
  border: solid 3px ${({ theme }) => theme.colors.secondaryForeground};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  padding: 10px;

  &:active,
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.primaryAccent};
    border-color: ${({ theme }) => theme.colors.primaryAccent};
  }
`

const Button: FC<ButtonProps> = ({ onClick = () => {}, children }) => (
  <StyledButton type="button" onClick={() => onClick()}>
    {children}
  </StyledButton>
)

export default Button
