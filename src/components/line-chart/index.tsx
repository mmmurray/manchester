import React, {
  FC,
  Fragment,
  MouseEvent,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'
import { useTheme } from '../../theme'

type Point = [number, number]
type Viewport = [number, number]

type Edge = [Point, Point]

type LineChartProps = {
  xLabel?: string
  yLabel?: string
  data?: Point[]
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  cursor: crosshair;
`

const clamp = (value: number, min: number, max: number) =>
  value < min ? min : value > max ? max : value

const convertPointsToEdges = ([firstPoint, ...points]: Point[]): Edge[] =>
  points.reduce<{ edges: Edge[]; previousPoint: Point }>(
    ({ edges, previousPoint }, point) => ({
      edges: [...edges, [previousPoint, point]],
      previousPoint: point,
    }),
    { edges: [], previousPoint: firstPoint },
  ).edges

const getMinMaxPoints = ([firstPoint, ...otherPoints]: Point[]): [
  Point,
  Point,
] => {
  let minX = firstPoint[0]
  let minY = firstPoint[1]
  let maxX = firstPoint[0]
  let maxY = firstPoint[1]

  otherPoints.forEach(([x, y]) => {
    if (x < minX) {
      minX = x
    }
    if (y < minY) {
      minY = y
    }
    if (x > maxX) {
      maxX = x
    }
    if (y > maxY) {
      maxY = y
    }
  })

  return [
    [minX, minY],
    [maxX, maxY],
  ]
}

const mapPointsToViewport = (
  points: Point[],
  [width, height]: Viewport,
): Point[] => {
  const [[minX, minY], [maxX, maxY]] = getMinMaxPoints(points)
  const rangeX = maxX - minX
  const rangeY = maxY - minY

  return points.map(([x, y]) => [
    ((x - minX) / rangeX) * width,
    height - ((y - minY) / rangeY) * height,
  ])
}

const createEdges = (points: Point[], viewport: Viewport): Edge[] =>
  convertPointsToEdges(mapPointsToViewport(points, viewport))

type AxisProps = {
  length: number
  labels: string[]
  height: number
  paddingTop: number
}

const XAxis: FC<AxisProps> = ({ length, labels, height, paddingTop }) => {
  const theme = useTheme()

  return (
    <>
      <line
        x1={0}
        y1={height + paddingTop}
        x2={length}
        y2={height + paddingTop}
        stroke={theme.foregroundColor}
        strokeWidth={2}
      />
      {labels.map((label, index) => {
        const x = (length / (labels.length - 1)) * index
        return (
          <Fragment key={index}>
            <line
              x1={x}
              y1={paddingTop}
              x2={x}
              y2={height + paddingTop}
              stroke="#666"
            />
            <g transform={`translate(${x}, ${height + paddingTop})`}>
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="4"
                stroke={theme.foregroundColor}
                strokeWidth={2}
              />
              <text x="-3" y="15" stroke={theme.foregroundColor} fontSize="10">
                {label}
              </text>
            </g>
          </Fragment>
        )
      })}
    </>
  )
}

const YAxis: FC<AxisProps> = ({ length, labels, height, paddingTop }) => {
  const theme = useTheme()

  return (
    <>
      <line
        x1={20}
        y1={0}
        x2={20}
        y2={length}
        stroke={theme.foregroundColor}
        strokeWidth={2}
      />
      {labels.map((label, index) => {
        const y = (length / (labels.length - 1)) * index
        return (
          <Fragment key={index}>
            <line
              x1={paddingTop + 10}
              y1={y}
              x2={height + paddingTop + 10}
              y2={y}
              stroke="#666"
            />
            <g transform={`translate(0, ${length - y})`}>
              <line
                x1="16"
                y1="0"
                x2="20"
                y2="0"
                stroke={theme.foregroundColor}
                strokeWidth={2}
              />
              <text x="2" y="0" stroke={theme.foregroundColor} fontSize="10">
                {label}
              </text>
            </g>
          </Fragment>
        )
      })}
    </>
  )
}

const LineChart: FC<LineChartProps> = ({ data = [] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [edges, setEdges] = useState<Edge[]>([])
  const [viewport, setViewport] = useState<Viewport | null>(null)
  const [showCrosshair, setShowCrosshair] = useState(false)
  const [crosshairX, setCrosshairX] = useState(20)
  const lineAreaContainerRef = useRef<SVGGElement>(null)
  const theme = useTheme()

  const xAxisHeight = 20
  const yAxisWidth = 20
  const paddingRight = 10
  const paddingTop = 10

  useLayoutEffect(() => {
    if (ref.current) {
      const viewport: Viewport = [
        ref.current.clientWidth,
        ref.current.clientHeight,
      ]
      const plotViewport: Viewport = [
        viewport[0] - yAxisWidth - paddingRight,
        viewport[1] - xAxisHeight - paddingTop,
      ]

      setViewport(viewport)
      setEdges(createEdges(data, plotViewport))
    }
  }, [ref])

  if (!viewport) {
    return <Container ref={ref}></Container>
  }

  const [[, minY], [, maxY]] = getMinMaxPoints(data)
  const yDivisions = 5
  const yStep = (maxY - minY) / yDivisions
  const yLabels = Array(yDivisions + 1)
    .fill(0)
    .map((a, i) => `${(i * yStep + minY).toFixed()}`)

  const lineAreaWidth = viewport[0] - yAxisWidth - paddingRight
  const lineAreaHeight = viewport[1] - xAxisHeight - paddingTop

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { left } = lineAreaContainerRef.current!.getBoundingClientRect()
    const x = e.clientX - left
    setCrosshairX(x)
  }

  const onMouseEnter = () => {
    setShowCrosshair(true)
  }

  const onMouseLeave = () => {
    setShowCrosshair(false)
  }

  return (
    <Container
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <svg viewBox={`0 0 ${viewport[0]} ${viewport[1]}`}>
        <g transform={`translate(${yAxisWidth}, 0)`}>
          <XAxis
            labels={data.map(([x]) => `${x}`)}
            length={lineAreaWidth}
            height={lineAreaHeight}
            paddingTop={paddingTop}
          />
        </g>
        <g transform={`translate(0, ${paddingTop})`}>
          <YAxis
            labels={yLabels}
            length={lineAreaHeight}
            height={lineAreaWidth}
            paddingTop={paddingRight}
          />
        </g>
        <g
          ref={lineAreaContainerRef}
          transform={`translate(${yAxisWidth}, ${paddingTop})`}
        >
          {edges.map(([[x1, y1], [x2, y2]]) => (
            <line
              key={`${x1}-${y1}-${x2}-${y2}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={theme.foregroundColor}
              strokeWidth={2}
            />
          ))}
          {showCrosshair ? (
            <line
              x1={clamp(crosshairX, 0, viewport[0] - paddingRight - yAxisWidth)}
              y1={0}
              x2={clamp(crosshairX, 0, viewport[0] - paddingRight - yAxisWidth)}
              y2={lineAreaHeight}
              stroke={theme.accentColor}
              strokeWidth={2}
            ></line>
          ) : null}
        </g>
      </svg>
    </Container>
  )
}

LineChart.displayName = 'LineChart'

export default LineChart
