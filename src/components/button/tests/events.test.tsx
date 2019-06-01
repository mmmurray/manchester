import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Button from '..'

test('can handle click events', () => {
  const onClick = jest.fn()
  const { getByText } = render(<Button onClick={onClick}>test button</Button>)

  fireEvent.click(getByText('test button'))

  expect(onClick).toHaveBeenCalledTimes(1)
})

test('click handler is optional', () => {
  const { getByText } = render(<Button>test button</Button>)

  fireEvent.click(getByText('test button'))
})
