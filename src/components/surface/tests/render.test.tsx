import React from 'react'
import Surface from '..'
import { render } from '../../../test-utils'

test('can render surfaces', () => {
  const { getByText } = render(
    <Surface>
      Inner 1
      <Surface>
        Inner 2
        <Surface>
          Inner 3<Surface>Inner 4</Surface>
        </Surface>
      </Surface>
    </Surface>,
  )

  getByText('Inner 1')
  getByText('Inner 2')
  getByText('Inner 3')
  getByText('Inner 4')
})
