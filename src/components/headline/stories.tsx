import { storiesOf } from '@storybook/react'
import React from 'react'
import Headline from '.'

storiesOf('headline', module).add('default', () => (
  <Headline>Manchester</Headline>
))
