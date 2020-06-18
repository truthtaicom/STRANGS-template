import styled from 'styled-components'
import Button from '../ui-kits/Button/Button'

export const StyledHeader = styled.div`
  align-items: center;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
  color: #202124;
  contain: layout;
  display: grid;
  font-size: 14px;
  height: 64px;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  grid-template-columns: 100px auto 100px;
`

export const StyledHeaderLogo = styled.div``
export const StyledHeaderMenu = styled.ul`
  display: grid;
  align-content: space-around;
  grid-template-columns: inherit;
  list-style: none;
`
export const StyledHeaderMenuItem = styled.li``
export const StyledHeaderButton = styled(Button)``
