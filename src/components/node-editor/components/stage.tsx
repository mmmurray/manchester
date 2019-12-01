import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react'
import styled from 'styled-components'
import { Point } from '../types'
import { useDrag } from '../use-drag'

type StageProps = {
  gridSize: number
  origin: Point
  onDrag(x: number, y: number): void
  onClick(event: React.MouseEvent<SVGSVGElement, MouseEvent>): void
  onDoubleClick(point: Point): void
}

type StageContextValue = {
  getOrigin(): Point
}

const StageContext = createContext<StageContextValue>({
  getOrigin: () => ({ x: 0, y: 0 }),
})

const useStage = () => useContext(StageContext)

const StyledSVG = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
  background: #333;
`

const StyledGridLine = styled.line`
  stroke: #555;
  stoke-width: 2px;
`

const range = (size: number): number[] =>
  Array(size)
    .fill(0)
    .map((x, i) => i)

const renderGrid = (
  gridSize: number,
  origin: Point,
  { width, height }: { width: number; height: number },
) => {
  const offsetX = origin.x % gridSize
  const offsetY = origin.y % gridSize
  const colunns = range(Math.ceil(width / gridSize)).map(x => (
    <StyledGridLine
      key={`x-${x}`}
      x1={x * gridSize - offsetX}
      y1={0}
      x2={x * gridSize - offsetX}
      y2={height}
    />
  ))
  const rows = range(Math.ceil(height / gridSize)).map(y => (
    <StyledGridLine
      key={`y-${y}`}
      x1={0}
      y1={y * gridSize - offsetY}
      x2={width}
      y2={y * gridSize - offsetY}
    />
  ))
  return [...colunns, ...rows]
}

const Stage: FC<StageProps> = ({
  children,
  gridSize,
  origin,
  onDrag,
  onClick,
  onDoubleClick,
}) => {
  const dragProps = useDrag<SVGSVGElement>(onDrag, origin)
  const [, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
  }, [])

  const getOrigin = useCallback(() => {
    if (!dragProps.ref.current) {
      return { x: 0, y: 0 }
    }
    const rect = dragProps.ref.current.getBoundingClientRect()

    return { x: rect.left, y: rect.top }
  }, [dragProps.ref])

  const content = dragProps.ref.current ? (
    <>
      {renderGrid(
        gridSize,
        origin,
        dragProps.ref.current.getBoundingClientRect(),
      )}
      {children}
    </>
  ) : null

  return (
    <StyledSVG
      {...dragProps}
      onClick={onClick}
      onDoubleClick={event => {
        const stageOrigin = getOrigin()

        onDoubleClick({
          x: event.clientX - stageOrigin.x,
          y: event.clientY - stageOrigin.y,
        })
      }}
    >
      <StageContext.Provider value={{ getOrigin }}>
        {content}
      </StageContext.Provider>
    </StyledSVG>
  )
}

export { Stage, useStage }
