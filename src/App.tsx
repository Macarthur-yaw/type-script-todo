import Todos from "./Todo"
import {useState} from "react"

const  App=()=> {

  const[display,setDisplay]=useState<boolean>(false)

  
  return (

<div>
<Todos display={display} setDisplay={setDisplay}/>

<div
onClick={()=>setDisplay(false)}
className={`${display ? 'bg-black bg-opacity-50 fixed w-full h-screen z-2 top-0':''}`}>

</div>
</div>
    )
}

export default App
