import React from 'react'
import drawCircle from "../utils/canvasLoadAnimation"
const Cpu = (props) => {
    // const canvas = "<canvas></canvas>"
  const canvas = document.querySelector(`.${props.cpuData.cpuWidgetId}`)
  drawCircle(canvas,props.cpuData.cpuLoad)
  return (
    <div
    className="col-sm-3 cpu"
    >
        <h3>CPU LOAD</h3>
        <div className="canvas-wrapper">
            <canvas className={props.cpuData.cpuWidgetId} width="200" height="200"></canvas>
            <div className="cpu-text">{props.cpuData.cpuLoad}%</div>
        </div>

    </div>
  )
}

export default Cpu