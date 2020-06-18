import React from 'react'
import Card from './Card'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Card',
  component: Card,
  decorators: [withA11y],
}

export const withoutButtonGroup: React.FC = () => (
  <Card
    onClick={action('Hello Button')}
    imageURL="https://media3.scdn.vn/img3/2019/4_19/NcrEm5_simg_b5529c_250x250_maxb.jpg"
  >
    Hello Card
  </Card>
)
