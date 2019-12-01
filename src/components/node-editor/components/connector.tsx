import React, { FC } from 'react'
import styled from 'styled-components'
import { ConnectorLayout, NodeEditorConnectorStyle } from '../types'

const connectorStyleColors: { [style in NodeEditorConnectorStyle]: string } = {
  active: 'lime',
  preview: 'red',
}

type ConnectorProps = {
  connector: ConnectorLayout
}

const StyledLine = styled.line`
  pointer-events: none;
`

const Connector: FC<ConnectorProps> = ({
  connector: { style, x1, y1, x2, y2 },
}) => (
  <StyledLine
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke={connectorStyleColors[style || 'active']}
    strokeWidth={2}
  />
)

export { Connector }
