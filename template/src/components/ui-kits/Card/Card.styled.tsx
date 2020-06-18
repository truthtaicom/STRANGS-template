import styled from 'styled-components'

export const StyledCard = styled.div`
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 10px;
  grid-gap: 10px;
`

export const StyledCardImage = styled.img`
  max-width: 100px;
  justify-self: center;
`

export const StyledCardBody = styled.div``

export const StyledCardButtonGroup = styled.div`
  display: grid;
  grid-gap: 5px;
`
