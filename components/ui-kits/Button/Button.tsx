import React from 'react'
import { StyledButton } from './Button.styled'

interface ButtonProps {
  children: React.ReactChild;
  onClick?(e: any): void
}

function Button(props: ButtonProps) {
  return (
    <StyledButton>
      {props.children}
    </StyledButton>
  )
}

export default Button;