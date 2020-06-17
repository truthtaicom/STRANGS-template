import React from 'react'
import { StyledText } from './Text.styled'

interface TextProps {
  children: string
}

function Text(props: TextProps) {
  return (
    <StyledText>{props.children}</StyledText>
  )
}

export default Text