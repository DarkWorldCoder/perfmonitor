import { useEffect, useState } from "react"
import socket from "./utils/socketConnection"
import Widget from "./components/Widget"

function App() {
  // const[widgets,setWidgets] = useState([])
  let widgets = []
  const [performanceData,setPerformanceData]= useState({})
  useEffect(() => {
    socket.on("data", data => {
      setPerformanceData(prev => ({ ...prev, [data.macA]: data }));
    });
  }, []);
  Object.entries(performanceData).forEach(([key, value]) => {
   
      widgets.push(<Widget key={key} data={value} />)
   
  })
  return (
    <div>
    {widgets}
    </div>
  )
}

export default App
