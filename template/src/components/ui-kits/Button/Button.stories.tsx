import React from 'react'
import Button from './Button'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y],
}

export const withText: React.FC = () => (
  <Button onClick={action('Hello Button')}>Hello Button</Button>
)

export const withEmoji: React.FC = () => (
  <Button onClick={action('Hello emoji')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
