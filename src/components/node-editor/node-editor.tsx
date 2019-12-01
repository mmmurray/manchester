import React, { FC } from 'react'
import { Connector } from './components/connector'
import { Node } from './components/node'
import { Stage } from './components/stage'
import {
  getConnectorLayout,
  getNodeLayout,
  getPortInPosition,
  getPortOutPosition,
} from './layout'
import {
  ConnectorLayout,
  NodeEditorAction,
  NodeEditorConnector,
  NodeEditorConnectorStyle,
  NodeEditorNode,
  Point,
} from './types'

type PreviewConnectorIn = {
  style?: NodeEditorConnectorStyle
  targetNode: string
  targetPort: string
  position: Point
}

type PreviewConnectorOut = {
  style?: NodeEditorConnectorStyle
  sourceNode: string
  sourcePort: string
  position: Point
}

type NodeEditorProps = {
  nodes: NodeEditorNode[]
  connectors: NodeEditorConnector[]
  previewConnectorIn?: PreviewConnectorIn
  previewConnectorOut?: PreviewConnectorOut
  origin?: Point
  onAction(action: NodeEditorAction): void
}

const getPreviewConnectorInLayout = (
  previewConnectorIn: PreviewConnectorIn,
  nodes: NodeEditorNode[],
  gridSize: number,
  origin: Point,
): ConnectorLayout => {
  const portOutPosition = getPortInPosition(
    previewConnectorIn.targetNode,
    previewConnectorIn.targetPort,
    nodes,
    gridSize,
    origin,
  )

  return {
    style: previewConnectorIn.style,
    x1: portOutPosition.x,
    y1: portOutPosition.y,
    x2: previewConnectorIn.position.x,
    y2: previewConnectorIn.position.y,
  }
}

const getPreviewConnectorOutLayout = (
  previewConnectorOut: PreviewConnectorOut,
  nodes: NodeEditorNode[],
  gridSize: number,
  origin: Point,
): ConnectorLayout => {
  const portOutPosition = getPortOutPosition(
    previewConnectorOut.sourceNode,
    previewConnectorOut.sourcePort,
    nodes,
    gridSize,
    origin,
  )

  return {
    style: previewConnectorOut.style,
    x1: portOutPosition.x,
    y1: portOutPosition.y,
    x2: previewConnectorOut.position.x,
    y2: previewConnectorOut.position.y,
  }
}

const NodeEditor: FC<NodeEditorProps> = ({
  onAction,
  nodes,
  connectors,
  previewConnectorIn,
  previewConnectorOut,
  origin = { x: 0, y: 0 },
}) => {
  const gridSize = 20
  const nodeLayouts = nodes.map(node => getNodeLayout(node, gridSize, origin))
  const connectorLayouts = connectors.map(connector =>
    getConnectorLayout(connector, nodes, gridSize, origin),
  )
  const previewConnectorInLayout = previewConnectorIn
    ? getPreviewConnectorInLayout(previewConnectorIn, nodes, gridSize, origin)
    : null
  const previewConnectorOutLayout = previewConnectorOut
    ? getPreviewConnectorOutLayout(previewConnectorOut, nodes, gridSize, origin)
    : null

  return (
    <Stage
      origin={origin}
      gridSize={gridSize}
      onDrag={(x, y) => {
        onAction({
          type: 'MOVE_ORIGIN',
          origin: { x: -x, y: -y },
        })
      }}
      onClick={() => {
        onAction({
          type: 'DESELECT',
        })
      }}
      onDoubleClick={point => {
        onAction({
          type: 'ADD_NEW_NODE',
          position: {
            x: point.x + origin.x,
            y: point.y + origin.y,
          },
        })
      }}
    >
      {nodeLayouts.map(node => (
        <Node
          key={node.node.id}
          node={node}
          onSelect={() => {
            onAction({
              type: 'SELECT_NODE',
              node: node.node,
            })
          }}
          onDelete={() => {
            onAction({
              type: 'DELETE_NODE',
              node: node.node,
            })
          }}
          onDrag={(x, y) => {
            onAction({
              type: 'MOVE_NODE',
              node: node.node,
              position: { x: x + origin.x, y: y + origin.y },
            })
          }}
          onPortOutDrag={(port, x, y) => {
            onAction({
              type: 'PORT_OUT_DRAG',
              node: node.node,
              port,
              position: { x, y },
            })
          }}
          onPortOutDrop={(port, x, y) => {
            onAction({
              type: 'PORT_OUT_DROP',
              node: node.node,
              port,
              position: { x, y },
            })
          }}
          onPortOutOver={port => {
            onAction({
              type: 'PORT_OUT_OVER',
              node: node.node,
              port,
            })
          }}
          onPortOutOff={port => {
            onAction({
              type: 'PORT_OUT_OFF',
              node: node.node,
              port,
            })
          }}
          onPortInDrag={(port, x, y) => {
            onAction({
              type: 'PORT_IN_DRAG',
              node: node.node,
              port,
              position: { x, y },
            })
          }}
          onPortInDrop={(port, x, y) => {
            onAction({
              type: 'PORT_IN_DROP',
              node: node.node,
              port,
              position: { x, y },
            })
          }}
          onPortInOver={port => {
            onAction({
              type: 'PORT_IN_OVER',
              node: node.node,
              port,
            })
          }}
          onPortInOff={port => {
            onAction({
              type: 'PORT_IN_OFF',
              node: node.node,
              port,
            })
          }}
          onDeletePortInConnectors={port => {
            onAction({
              type: 'DELETE_PORT_IN_CONNECTORS',
              node: node.node,
              port,
            })
          }}
          onDeletePortOutConnectors={port => {
            onAction({
              type: 'DELETE_PORT_OUT_CONNECTORS',
              node: node.node,
              port,
            })
          }}
        />
      ))}
      {connectorLayouts.map((connector, index) => (
        <Connector key={index} connector={connector} />
      ))}
      {previewConnectorInLayout ? (
        <Connector connector={previewConnectorInLayout} />
      ) : null}
      {previewConnectorOutLayout ? (
        <Connector connector={previewConnectorOutLayout} />
      ) : null}
    </Stage>
  )
}

NodeEditor.displayName = 'NodeEditor'

export { NodeEditor }
