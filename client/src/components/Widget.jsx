import React from 'react'
import Cpu from './Cpu'
import Mem from './Mem'
import Info from './Info'
import "../widget.css"
const Widget = (props) => {
  const {
    macA,freeMem,totalMem,usedMem,memUseage,osType,upTime,cpuModel,numCores,cpuSpeed,cpuLoad,isActive
  } = props.data

  const cpuWidgetId = `cpu-widget-${macA.split(":")[0]}`
  const memWidgetId = `mem-widget-${macA.split(":")[0]}`
  const cpu = {cpuLoad,cpuWidgetId}
  const mem = {totalMem,usedMem,memUseage,freeMem,memWidgetId}
  const info = {macA,osType,upTime,cpuModel,numCores,cpuSpeed}
  
  let notActiveDiv = ""
  if(!isActive){ 
    notActiveDiv = <div className="not-active">Offline</div>
  }

  return (
    <div className='widget col-sm-12 d-flex gap'>
     {notActiveDiv}
      <Cpu cpuData={cpu}/>
      <Mem memData={mem}/>
      <Info infoData={info}/>
    </div>
  )
}

export default Widget