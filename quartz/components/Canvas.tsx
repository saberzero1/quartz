import { drag, select, zoom } from "d3"
import { useEffect, useRef, useState } from "preact/hooks"
import { render } from "preact-render-to-string"
//import ReactMarkdown from "react-markdown";

import {
  CanvasEdge,
  CanvasNode,
  CanvasContent,
  Direction,
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "./types"
import canvasStyle from "./styles/canvas.scss"

// @ts-ignore
import script from "./scripts/canvas.inline"
import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

export interface CanvasProps {
  content: CanvasContent
}

export function RenderCanvas({ content }: CanvasProps) {
  const [scale, setScale] = useState(1)
  const [translateX, setTranslateX] = useState(0)
  const [translateY, setTranslateY] = useState(0)
  const containerRef = useRef(null)
  const [nodes, setNodes] = useState(content.initialNodes)
  const nodesRef = useRef(content.initialNodes)

  function getAnchorPoint(node: HTMLElement, side: Direction) {
    const x = parseInt(node.style.left, 10)
    const y = parseInt(node.style.top, 10)
    const width = node.offsetWidth
    const height = node.offsetHeight

    switch (side) {
      case "top":
        return { x: x + width / 2, y: y }
      case "right":
        return { x: x + width, y: y + height / 2 }
      case "bottom":
        return { x: x + width / 2, y: y + height }
      case "left":
        return { x: x, y: y + height / 2 }
      default: // center or unspecified case
        return { x: x + width / 2, y: y + height / 2 }
    }
  }

  const drawEdges = () => {
    const svgContainer = document.getElementById("edge-paths")
    if (svgContainer) {
      svgContainer.replaceChildren() // Clear existing edges for redraw
    }
    content.edges.forEach((edge) => {
      const fromNode = document.getElementById(edge.fromNode)
      const toNode = document.getElementById(edge.toNode)

      if (fromNode && toNode && edge.fromSide && edge.toSide) {
        const fromPoint = getAnchorPoint(fromNode, edge.fromSide)
        const toPoint = getAnchorPoint(toNode, edge.toSide)
        // handle translate
        fromPoint.x += translateX
        fromPoint.y += translateY
        toPoint.x += translateX
        toPoint.y += translateY

        const curveTightness = 0.75
        const controlPointX1 = fromPoint.x + (toPoint.x - fromPoint.x) * curveTightness
        const controlPointX2 = fromPoint.x + (toPoint.x - fromPoint.x) * (1 - curveTightness)
        const controlPointY1 = fromPoint.y
        const controlPointY2 = toPoint.y

        const d = `M ${fromPoint.x} ${fromPoint.y} C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${toPoint.x} ${toPoint.y}`

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path.setAttribute("d", d)
        path.setAttribute("stroke", edge.color ? edge.color : "black")
        if (edge.toEnd === "arrow") {
          path.setAttribute("marker-end", "url(#arrowhead)")
        }

        svgContainer?.appendChild(path)
      }
    })
  }

  useEffect(() => {
    drawEdges()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, scale, translateX, translateY])

  useEffect(() => {
    const container = select(containerRef.current)
    const zoomFn = zoom()
      // .scaleExtent([0.5, 5])
      .on("zoom", (event) => {
        setScale(event.transform.k)
        setTranslateX(event.transform.x)
        setTranslateY(event.transform.y)
      })

    //@ts-ignore
    container.call(zoomFn)
  }, [])

  useEffect(() => {
    const container = select(containerRef.current)
    const dragHandler = drag()
      .on("start", (event) => {
        select(event.sourceEvent.target).classed("dragging", true)
      })
      .on("drag", (event) => {
        const nodeId = event.sourceEvent.target.id
        nodesRef.current = nodesRef.current.map((n) =>
          n.id === nodeId
            ? {
                ...n,
                position: {
                  x: n.position.x + event.dx,
                  y: n.position.y + event.dy,
                },
              }
            : n,
        )
        // Force update to reflect the changes in the UI
        setNodes([...nodesRef.current])
      })
      .on("end", (event) => {
        select(event.sourceEvent.target).classed("dragging", false)
      })

    //@ts-ignore
    container.selectAll(".node").call(dragHandler)
  }, [])

  return (
    <section
      ref={containerRef}
      className="min-w-screen bg-silver-100 text-blue-900 relative h-full min-h-screen w-full"
      style={{
        backgroundSize: `calc(${scale} * 20px) calc(${scale} * 20px)`,
        backgroundPosition: `calc(${scale} - 19px) calc(${scale} - 19px)`,
        backgroundImage: `radial-gradient(#ddd calc(${scale}*0.5px + 0.5px), transparent 0)`,
      }}
    >
      <>
        <svg id="canvas-edges">
          <defs>
            <marker id="arrowhead" markerWidth="5" markerHeight="4" refX="1" refY="2" orient="auto">
              <polygon points="0 0, 5 2, 0 4" />
            </marker>
          </defs>
          <g id="edge-paths"></g>
        </svg>
        {nodesRef.current?.map((node) => (
          <div
            id={node.id}
            key={node.id}
            className="border-silver-300 node active:text-blue-800 absolute overflow-hidden rounded border-[1px] border-solid bg-white p-2 transition-shadow duration-200 hover:cursor-grab active:cursor-grabbing active:shadow-md"
            style={{
              // minHeight: `${node.dimensions.height * scale}px`,
              // minWidth: `${node.dimensions.width * scale}px`,
              transform: `translate(${translateX}px, ${translateY}px)`,
              // transform: `scale(${scale})`,
              left: `${node.position.x * scale + 20}px`,
              top: `${node.position.y * scale + 20}px`,
              fontSize: `${scale * 12}px`,
              lineHeight: `${scale * 16}px`,
            }}
          >
            <div>{node.data.content}</div>
          </div>
        ))}
      </>
    </section>
  )
}

export interface Options {}

// Options interface defined in `ExplorerNode` to avoid circular dependency
const defaultOptions = {} satisfies Options

export default ((userOpts?: Partial<Options>) => {
  // Parse config
  const opts: Options = { ...defaultOptions, ...userOpts }

  const Canvas: QuartzComponent = ({
    cfg,
    allFiles,
    displayClass,
    fileData,
    children,
  }: QuartzComponentProps) => {
    return RenderCanvas({ content: App() })
  }

  Canvas.css = canvasStyle
  Canvas.afterDOMLoaded = script
  return Canvas
}) satisfies QuartzComponentConstructor

function App() {
  const mockEdges: CanvasEdge[] = [
    {
      id: "edge1",
      fromNode: "node1",
      fromSide: "right",
      fromEnd: "arrow",
      toNode: "node2",
      toSide: "left",
      color: "blue",
    },
    {
      id: "edge2",
      fromNode: "node2",
      fromSide: "bottom",
      fromEnd: "arrow",
      toNode: "node3",
      toSide: "top",
      toEnd: "arrow",
      color: "red",
    },
    {
      id: "edge3",
      fromNode: "node3",
      fromSide: "right",
      fromEnd: "arrow",
      toNode: "node4",
      toSide: "top",
      toEnd: "none",
      color: "#008000",
    },
    {
      id: "edge4",
      fromNode: "node1",
      fromSide: "right",
      toNode: "node4",
      toSide: "left",
      toEnd: "arrow",
    },
    {
      id: "edge5",
      fromNode: "node4",
      fromSide: "right",
      toNode: "node5",
      toSide: "left",
      toEnd: "arrow",
    },
    {
      id: "edge6",
      fromNode: "node6",
      fromSide: "right",
      toNode: "node7",
      toSide: "left",
    },
  ]

  const mockInitialNodes: CanvasNode[] = [
    {
      id: "node1",
      type: "start",
      data: { label: "Start Node", content: "This is the starting point" },
      position: { x: 100, y: 100 },
      dimensions: { width: 120, height: 60 },
    },
    {
      id: "node2",
      type: "process",
      data: { label: "Process Node", content: "This is a process node" },
      position: { x: 300, y: 100 },
      dimensions: { width: 150, height: 80 },
    },
    {
      id: "node3",
      type: "decision",
      data: { label: "Decision Node", content: "This is a decision node" },
      position: { x: 100, y: 300 },
      dimensions: { width: 140, height: 100 },
    },
    {
      id: "node4",
      type: "end",
      data: { label: "End Node", content: "This is the end point" },
      position: { x: 300, y: 500 },
      dimensions: { width: 120, height: 60 },
    },
    {
      id: "node5",
      type: "process",
      data: { label: "Process Node", content: "Another process node" },
      position: { x: 500, y: 100 },
      dimensions: { width: 150, height: 80 },
    },
    {
      id: "node6",
      type: "decision",
      data: { label: "Decision Node", content: "Another decision node" },
      position: { x: 100, y: 480 },
      dimensions: { width: 140, height: 100 },
    },
    {
      id: "node7",
      type: "process",
      data: { label: "Process Node", content: "Yet another process node" },
      position: { x: 500, y: 300 },
      dimensions: { width: 150, height: 80 },
    },
  ]

  const mockCanvasContent: CanvasContent = {
    edges: mockEdges,
    initialNodes: mockInitialNodes,
  }

  //return <RenderCanvas content={mockCanvasContent} />;
  return mockCanvasContent
}
