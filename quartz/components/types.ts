import { ComponentType, JSX } from "preact"
import { StaticResources } from "../util/resources"
import { QuartzPluginData } from "../plugins/vfile"
import { GlobalConfiguration } from "../cfg"
import { Node } from "hast"
import { BuildCtx } from "../util/ctx"

export type QuartzComponentProps = {
  ctx: BuildCtx
  externalResources: StaticResources
  fileData: QuartzPluginData
  cfg: GlobalConfiguration
  children: (QuartzComponent | JSX.Element)[]
  tree: Node
  allFiles: QuartzPluginData[]
  displayClass?: "mobile-only" | "desktop-only"
} & JSX.IntrinsicAttributes & {
    [key: string]: any
  }

export type QuartzComponent = ComponentType<QuartzComponentProps> & {
  css?: string
  beforeDOMLoaded?: string
  afterDOMLoaded?: string
}

export type QuartzComponentConstructor<Options extends object | undefined = undefined> = (
  opts: Options,
) => QuartzComponent

export type Direction = "top" | "right" | "left" | "bottom"
export type MarkerType = "none" | "arrow"

export interface CanvasEdge {
  id: string
  fromNode: string
  fromSide?: Direction
  fromEnd?: MarkerType
  toNode: string
  toSide?: Direction
  toEnd?: MarkerType
  color?: string
  label?: string
}

export interface CanvasNode {
  id: string
  type: string
  data: { label: string; content: string }
  position: { x: number; y: number }
  dimensions: { width: number; height: number }
}

export interface CanvasContent {
  edges: CanvasEdge[]
  initialNodes: CanvasNode[]
}
