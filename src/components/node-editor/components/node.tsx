import React, { FC } from 'react'
import styled from 'styled-components'
import { NodeEditorPort, NodeLayout } from '../types'
import { useDrag } from '../use-drag'
import { Port } from './port'

const portNameIndent = 14
const portNameFill = '#aaa'
const nameFill = '#aaa'
const nodeTextTopOffset = 25
const nodeResultTopOffset = 40
const closeButtonSize = 15
const closeButtonOffset = 10

type NodeProps = {
  node: NodeLayout
  onDrag(x: number, y: number): void
  onPortOutDrag(port: NodeEditorPort, x: number, y: number): void
  onPortOutDrop(port: NodeEditorPort, x: number, y: number): void
  onPortOutOver(port: NodeEditorPort): void
  onPortOutOff(port: NodeEditorPort): void
  onPortInDrag(port: NodeEditorPort, x: number, y: number): void
  onPortInDrop(port: NodeEditorPort, x: number, y: number): void
  onPortInOver(port: NodeEditorPort): void
  onPortInOff(port: NodeEditorPort): void
  onDeletePortInConnectors(port: NodeEditorPort): void
  onDeletePortOutConnectors(port: NodeEditorPort): void
  onDelete(): void
  onSelect(): void
}

const StyledRect = styled.rect`
  cursor: grab;
`

const StyledCloseButton = styled.rect`
  cursor: pointer;
  fill: transparent;
  stroke: #777;
  stroke-width: 2px;

  :hover {
    stroke: #fff;
    fill: #fff;
  }
`

const StyledNodeText = styled.text`
  font-family: Arial;
  pointer-events: none;
  user-select: none;
  font-size: 16px;
`

const StyledResultText = styled.text`
  font-family: Arial;
  pointer-events: none;
  user-select: none;
  font-size: 32px;
`

const StyledPortText = styled.text`
  font-family: Arial;
  pointer-events: none;
  user-select: none;
  font-size: 12px;
`

const Node: FC<NodeProps> = ({
  node: {
    x,
    y,
    w,
    h,
    portsIn,
    portsOut,
    node: { label, result, selected },
  },
  ...props
}) => {
  const dragProps = useDrag<SVGRectElement>(props.onDrag, { x: -x, y: -y })

  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <filter id="shadow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="2"
            floodColor="#ffffff"
            floodOpacity="0.2"
          />
        </filter>
      </defs>
      <StyledRect
        {...dragProps}
        onClick={event => {
          event.stopPropagation()
          props.onSelect()
        }}
        filter="url(#shadow)"
        x={0}
        y={0}
        width={w}
        height={h}
        fill="#151515"
        stroke="white"
        strokeWidth={selected ? 2 : 0}
        rx={4}
        ry={4}
      />
      <StyledNodeText
        fill={nameFill}
        x={w / 2}
        y={nodeTextTopOffset}
        textAnchor="middle"
        width={w}
      >
        {label}
      </StyledNodeText>
      {result ? (
        <StyledResultText
          fill={nameFill}
          x={w / 2}
          y={nodeTextTopOffset + nodeResultTopOffset}
          textAnchor="middle"
          width={w}
        >
          {result}
        </StyledResultText>
      ) : null}
      <StyledCloseButton
        onClick={() => props.onDelete()}
        x={w - closeButtonOffset - closeButtonSize}
        y={closeButtonOffset}
        width={closeButtonSize}
        height={closeButtonSize}
      />
      {portsIn.map(port => (
        <Port
          key={port.port.id}
          port={port}
          onDrag={(x, y) => props.onPortInDrag(port.port, x, y)}
          onDrop={(x, y) => props.onPortInDrop(port.port, x, y)}
          onOver={() => props.onPortInOver(port.port)}
          onOut={() => props.onPortInOff(port.port)}
          onDeleteConnectors={() => props.onDeletePortInConnectors(port.port)}
        />
      ))}
      {portsIn.map(port => (
        <StyledPortText
          key={port.port.id}
          x={portNameIndent}
          textAnchor="start"
          y={port.cy + 4}
          fill={portNameFill}
        >
          {port.port.label}
        </StyledPortText>
      ))}
      {portsOut.map(port => (
        <Port
          key={port.port.id}
          port={port}
          onDrag={(x, y) => props.onPortOutDrag(port.port, x, y)}
          onDrop={(x, y) => props.onPortOutDrop(port.port, x, y)}
          onOver={() => props.onPortOutOver(port.port)}
          onOut={() => props.onPortOutOff(port.port)}
          onDeleteConnectors={() => props.onDeletePortOutConnectors(port.port)}
        />
      ))}
      {portsOut.map(port => (
        <StyledPortText
          key={port.port.label}
          x={w - portNameIndent}
          textAnchor="end"
          y={port.cy + 4}
          fill={portNameFill}
        >
          {port.port.label}
        </StyledPortText>
      ))}
    </g>
  )
}

export { Node }
