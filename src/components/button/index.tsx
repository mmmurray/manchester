import React, { FC } from 'react'

type ButtonProps = {
  onClick?: () => void
}

const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
)

export default Button
