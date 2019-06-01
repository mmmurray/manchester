import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

storiesOf('button', module).add('default', () => (
  <button onClick={action('clicked')}>Hello world</button>
))
