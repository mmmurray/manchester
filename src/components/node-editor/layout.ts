import {
  ConnectorLayout,
  NodeEditorConnector,
  NodeEditorNode,
  NodeEditorPort,
  NodeLayout,
  PortLayout,
} from './types'

const portTopOffset = 60
const portSpacing = 30
const nodeWidth = 200
const nodeBaseHeight = 50

const getPortInLayout = (port: NodeEditorPort, index: number): PortLayout => ({
  port,
  cx: 0,
  cy: index * portSpacing + portTopOffset,
})

const getPortOutLayout = (port: NodeEditorPort, index: number): PortLayout => ({
  port,
  cx: nodeWidth,
  cy: index * portSpacing + portTopOffset,
})

const roundToNearest = (base: number, value: number) => {
  const quotient = value % base

  return value - quotient + Math.round(quotient / base) * base
}

const getNodeLayout = (
  node: NodeEditorNode,
  gridSize: number,
  origin: Point,
): NodeLayout => ({
  node,
  x: roundToNearest(gridSize, node.position.x) - origin.x,
  y: roundToNearest(gridSize, node.position.y) - origin.y,
  w: nodeWidth,
  h: roundToNearest(
    gridSize,
    nodeBaseHeight +
      Math.max(node.portsIn.length, node.portsOut.length) * portSpacing,
  ),
  portsIn: node.portsIn.map(getPortInLayout),
  portsOut: node.portsOut.map(getPortOutLayout),
})

type Point = { x: number; y: number }

const getPortOutPosition = (
  nodeId: string,
  portId: string,
  nodes: NodeEditorNode[],
  gridSize: number,
  origin: Point,
): Point => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const node = nodes.find(({ id }) => id === nodeId)!
  const portIndex = node.portsOut.findIndex(({ id }) => id === portId)
  const nodeLayout = getNodeLayout(node, gridSize, origin)
  const portLayout = nodeLayout.portsOut[portIndex]

  return {
    x: portLayout.cx + nodeLayout.x,
    y: portLayout.cy + nodeLayout.y,
  }
}

const getPortInPosition = (
  nodeId: string,
  portId: string,
  nodes: NodeEditorNode[],
  gridSize: number,
  origin: Point,
): Point => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const node = nodes.find(({ id }) => id === nodeId)!
  const portIndex = node.portsIn.findIndex(({ id }) => id === portId)
  const nodeLayout = getNodeLayout(node, gridSize, origin)
  const portLayout = nodeLayout.portsIn[portIndex]

  return {
    x: portLayout.cx + nodeLayout.x,
    y: portLayout.cy + nodeLayout.y,
  }
}

const getConnectorLayout = (
  connector: NodeEditorConnector,
  nodes: NodeEditorNode[],
  gridSize: number,
  origin: Point,
): ConnectorLayout => {
  const portOutPosition = getPortOutPosition(
    connector.sourceNode,
    connector.sourcePort,
    nodes,
    gridSize,
    origin,
  )

  const portInPosition = getPortInPosition(
    connector.targetNode,
    connector.targetPort,
    nodes,
    gridSize,
    origin,
  )

  return {
    style: connector.style,
    x1: portOutPosition.x,
    y1: portOutPosition.y,
    x2: portInPosition.x,
    y2: portInPosition.y,
  }
}

export {
  getNodeLayout,
  getConnectorLayout,
  getPortInPosition,
  getPortOutPosition,
}
