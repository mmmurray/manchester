import React, { FC } from 'react'
import styled from 'styled-components'

type ButtonProps = {
  onClick?: () => void
}

const StyledButton = styled.button`
  padding: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  font-size: 20px;
`

const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <StyledButton type="button" onClick={onClick}>
    {children}
  </StyledButton>
)

export default Button
