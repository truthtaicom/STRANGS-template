import React from 'react'
import { StyledLayout } from './Layout.styled'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
  return <StyledLayout>{props.children}</StyledLayout>
}

export default Layout
