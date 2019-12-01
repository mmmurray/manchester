import React from 'react'
import SplitPanel from '..'
import { fireEvent, render } from '../../../test-utils'

test('can handle division change events', () => {
  const onSizeChange = jest.fn()

  const { getByTestId, element } = render(
    <SplitPanel onSizeChange={onSizeChange} />,
  )

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.mouseDown(divider, { screenX: 50 })
  fireEvent.mouseMove(divider, { screenX: 55 })
  fireEvent.mouseUp(divider, { screenX: 55 })

  expect(onSizeChange.mock.calls).toEqual([[5]])
})

test('division change handler is optional', () => {
  const { getByTestId, element } = render(<SplitPanel />)

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.mouseDown(divider, { screenX: 50 })
  fireEvent.mouseMove(divider, { screenX: 55 })
  fireEvent.mouseUp(divider, { screenX: 55 })
})

test('can set minimum and maximum divisions', () => {
  const onSizeChange = jest.fn()

  const { getByTestId, element } = render(
    <SplitPanel
      onSizeChange={onSizeChange}
      minLeftSize={20}
      maxLeftSize={80}
    />,
  )

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.mouseDown(divider, { screenX: 100 })
  fireEvent.mouseMove(divider, { screenX: 0 })
  fireEvent.mouseMove(divider, { screenX: 200 })
  fireEvent.mouseUp(divider, { screenX: 200 })

  expect(onSizeChange.mock.calls).toEqual([[20], [80]])
})

test('can double click divider to set default division', () => {
  const onSizeChange = jest.fn()

  const { getByTestId, element } = render(
    <SplitPanel onSizeChange={onSizeChange} defaultLeftSize={22} />,
  )

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.doubleClick(divider)

  expect(onSizeChange.mock.calls).toEqual([[22]])
})

test('double clicking divider without a default division does nothing', () => {
  const onSizeChange = jest.fn()

  const { getByTestId, element } = render(
    <SplitPanel onSizeChange={onSizeChange} />,
  )

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.doubleClick(divider)

  expect(onSizeChange.mock.calls).toEqual([])
})
