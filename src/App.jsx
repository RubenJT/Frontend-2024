import { useState } from "react"





function App() {
  const [count, setcount] = useState (0)
  const handleButtomIncrement =  () => {setcount (count+1)}
  const handleButtomdecrement =  () => {setcount (count-1)}
  const handleButtom0 =  () => {setcount(0)}
  

  return (
  
    <div> <h1>buttom</h1> <hr /> 
     
    <h1>{count}</h1>
  <button onClick={handleButtomIncrement}>incrementar</button>

  <button onClick={handleButtom0}>reinciar</button>

  <button onClick={handleButtomdecrement}>decremntar</button>

  <button onAbortCapture= {()=> {
    

    return{

    }

  }}>guardar numero</button>

  </div>
  )
}

export default App
