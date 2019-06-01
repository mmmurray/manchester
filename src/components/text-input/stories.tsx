import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'
import TextInput from '.'

storiesOf('text-input', module).add('default', () => (
  <TextInput label="Full name" onChange={action('change')} />
))
