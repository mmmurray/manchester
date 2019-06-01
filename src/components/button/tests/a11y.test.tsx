import React from 'react'
import Button from '..'

test('default button a11y', async () => {
  await expect(<Button>test button</Button>).toMatchA11ySnapshot()
})
