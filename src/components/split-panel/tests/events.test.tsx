import React from 'react'
import SplitPanel from '..'
import { fireEvent, render } from '../../../test-utils'

test('can handle division change events', () => {
  const onDivisionChange = jest.fn()

  const { getByTestId, element } = render(
    <SplitPanel onDivisionChange={onDivisionChange} />,
  )

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.mouseDown(divider, { screenX: 50 })
  fireEvent.mouseMove(divider, { screenX: 55 })
  fireEvent.mouseUp(divider, { screenX: 55 })

  expect(onDivisionChange.mock.calls).toEqual([[0.55]])
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
  const onDivisionChange = jest.fn()

  const { getByTestId, element } = render(
    <SplitPanel
      onDivisionChange={onDivisionChange}
      minimumDivision={0.2}
      maximumDivision={0.8}
    />,
  )

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.mouseDown(divider, { screenX: 50 })
  fireEvent.mouseMove(divider, { screenX: 0 })
  fireEvent.mouseMove(divider, { screenX: 100 })
  fireEvent.mouseUp(divider, { screenX: 100 })

  expect(onDivisionChange.mock.calls).toEqual([[0.2], [0.8]])
})

test('can double click divider to set default division', () => {
  const onDivisionChange = jest.fn()

  const { getByTestId, element } = render(
    <SplitPanel onDivisionChange={onDivisionChange} defaultDivision={0.22} />,
  )

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.doubleClick(divider)

  expect(onDivisionChange.mock.calls).toEqual([[0.22]])
})

test('double clicking divider without a default division does nothing', () => {
  const onDivisionChange = jest.fn()

  const { getByTestId, element } = render(
    <SplitPanel onDivisionChange={onDivisionChange} />,
  )

  Object.defineProperty(element, 'clientWidth', { value: 100 })

  const divider = getByTestId('manchester-split-panel-divider')

  fireEvent.doubleClick(divider)

  expect(onDivisionChange.mock.calls).toEqual([])
})
