import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import Button from '.'

storiesOf('button', module).add('default', () => (
  <Button onClick={action('click')}>Default button</Button>
))
