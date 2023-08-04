import React from 'react'
import drawCircle from '../utils/canvasLoadAnimation'

const Mem = (props) => {

  

 const {totalMem,usedMem,memUseage,freeMem} = props.memData
//  const canvas = "<canvas></canvas>"
  const canvas = document.querySelector(`.${props.memData.memWidgetId}`)
  drawCircle(canvas,memUseage*100)
  return (
    <div className="col-sm-3 mem">
        <h3>Memory Usage</h3>
        <div className="canvas-wrapper">
            <canvas className={`${props.memData.memWidgetId}`} width="200" height="200"></canvas>
            <div className="mem-text">{memUseage*100}%</div>
        </div>
        <div>
            Total Memory: {(totalMem/1073741824*100)/100} GB
        </div>
        <div>
            Free Memory:  {Math.floor(freeMem/1073741824*100)/100} GB
        </div>
    </div>
  )
}

export default Mem