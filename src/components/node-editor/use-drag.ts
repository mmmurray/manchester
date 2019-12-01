import { useRef, useCallback, MouseEvent as ReactMouseEvent } from 'react'
import { useStage } from './components/stage'

const useDrag = <TElement extends SVGElement>(
  onDrag: (x: number, y: number) => void,
  origin: { x: number; y: number } = { x: 0, y: 0 },
  options: {
    onDrop?: (x: number, y: number) => void
    point?: boolean
  } = {},
) => {
  const ref = useRef<TElement>(null)
  const { getOrigin } = useStage()

  const onPointerDown = useCallback(
    (event: ReactMouseEvent<TElement>) => {
      const stageOrigin = getOrigin()
      event.stopPropagation()
      event.preventDefault()

      const { x: startOriginX, y: startOriginY } = origin

      if (!ref.current) {
        return
      }

      const offsetX = event.clientX
      const offsetY = event.clientY

      const getEventPosition = (event: PointerEvent): [number, number] =>
        options.point
          ? [event.clientX - stageOrigin.x, event.clientY - stageOrigin.y]
          : [
              event.clientX - offsetX - startOriginX,
              event.clientY - offsetY - startOriginY,
            ]

      const pointerMoveHandler = (event: PointerEvent) => {
        event.stopPropagation()
        event.preventDefault()
        onDrag(...getEventPosition(event))
      }

      const pointerUpHandler = (event: PointerEvent) => {
        event.stopPropagation()
        event.preventDefault()

        document.body.removeEventListener('pointermove', pointerMoveHandler)
        document.body.removeEventListener('pointerup', pointerUpHandler)

        if (options.onDrop) {
          options.onDrop(...getEventPosition(event))
        }
      }

      document.body.addEventListener('pointermove', pointerMoveHandler)
      document.body.addEventListener('pointerup', pointerUpHandler)
    },
    [ref, origin],
  )

  return {
    ref,
    onPointerDown,
  }
}

export { useDrag }
