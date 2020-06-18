import React from 'react'
import { StyledButton } from './Button.styled'

interface ButtonProps {
  children: React.ReactChild
  onClick?(e: React.MouseEvent<HTMLElement>): void
}

const Button: React.FC = (props: ButtonProps) => {
  return <StyledButton>{props.children}</StyledButton>
}

export default Button
