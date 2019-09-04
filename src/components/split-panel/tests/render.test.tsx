import React from 'react'
import SplitPanel from '..'
import { render } from '../../../test-utils'

test('can render panels', () => {
  const { getByText } = render(
    <SplitPanel
      leftPanel={<div>Test Left Panel</div>}
      rightPanel={<div>Test Right Panel</div>}
    />,
  )

  getByText('Test Left Panel')
  getByText('Test Right Panel')
})
