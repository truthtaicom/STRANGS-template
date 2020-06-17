import React from 'react'
import { StyledLayout } from './Layout.styled'

interface LayoutProps {
  children: React.ReactNode
}

function Layout(props: LayoutProps) {
  return (
    <StyledLayout>
      {props.children}
    </StyledLayout>
  )
}

export default Layout;