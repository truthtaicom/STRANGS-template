import React from 'react'
import { Text } from '../ui-kits/Text'
import { StyledFooter } from './Footer.styled'

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Text>STRANGS Template © 2020</Text>
      <Text>Made with ❤️ in Ho Chi Minh city. </Text>
    </StyledFooter>
  )
}

export default Footer
