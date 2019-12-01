export type Point = {
  x: number
  y: number
}

export type NodeEditorPort = {
  id: string
  label: string
}

export type NodeEditorNode = {
  id: string
  label: string
  position: Point
  portsIn: NodeEditorPort[]
  portsOut: NodeEditorPort[]
  result?: string
  selected?: boolean
}

export type NodeEditorConnectorStyle = 'active' | 'preview'

export type NodeEditorConnector = {
  style?: NodeEditorConnectorStyle
  sourceNode: string
  sourcePort: string
  targetNode: string
  targetPort: string
}

export type ConnectorLayout = {
  style?: NodeEditorConnectorStyle
  y1: number
  x1: number
  x2: number
  y2: number
}

export type PortLayout = {
  port: NodeEditorPort
  cx: number
  cy: number
}

export type NodeLayout = {
  node: NodeEditorNode
  x: number
  y: number
  w: number
  h: number
  portsIn: PortLayout[]
  portsOut: PortLayout[]
}

export type NodeEditorAction =
  | {
      type: 'MOVE_ORIGIN'
      origin: Point
    }
  | {
      type: 'DESELECT'
    }
  | {
      type: 'ADD_NEW_NODE'
      position: Point
    }
  | {
      type: 'MOVE_NODE'
      node: NodeEditorNode
      position: Point
    }
  | {
      type: 'DELETE_NODE'
      node: NodeEditorNode
    }
  | {
      type: 'PORT_OUT_DRAG'
      position: Point
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'PORT_OUT_DROP'
      position: Point
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'PORT_OUT_OVER'
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'PORT_OUT_OFF'
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'PORT_IN_DRAG'
      position: Point
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'PORT_IN_DROP'
      position: Point
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'PORT_IN_OVER'
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'PORT_IN_OFF'
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'DELETE_PORT_IN_CONNECTORS'
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'DELETE_PORT_OUT_CONNECTORS'
      node: NodeEditorNode
      port: NodeEditorPort
    }
  | {
      type: 'SELECT_NODE'
      node: NodeEditorNode
    }
