import React, { FC } from 'react'
import styled from 'styled-components'
import { PortLayout } from '../types'
import { useDrag } from '../use-drag'

const portFill = '#aaa'

type PortProps = {
  port: PortLayout
  onDrag(x: number, y: number): void
  onDrop(x: number, y: number): void
  onOver(): void
  onOut(): void
  onDeleteConnectors(): void
}

const StyledCircle = styled.circle`
  cursor: pointer;
`

const Port: FC<PortProps> = ({
  port,
  onDrag,
  onDrop,
  onOver,
  onOut,
  onDeleteConnectors,
}) => {
  const dragProps = useDrag<SVGCircleElement>(onDrag, undefined, {
    onDrop,
    point: true,
  })

  return (
    <StyledCircle
      {...dragProps}
      onPointerOver={() => onOver()}
      onPointerOut={() => onOut()}
      onDoubleClick={event => {
        event.stopPropagation()
        onDeleteConnectors()
      }}
      key={port.port.id}
      cx={port.cx}
      cy={port.cy}
      r={10}
      fill={portFill}
    />
  )
}

export { Port }
