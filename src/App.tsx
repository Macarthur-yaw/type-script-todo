import Todos from "./Todo"
import {useState} from "react"

const  App=()=> {

  const[display,setDisplay]=useState<boolean>(false)

  
  return (

<div className={`${display ? 'bg-black bg-opacity-50 fixed w-full h-screen z-10':''}`}>
<Todos display={display} setDisplay={setDisplay}/>

</div>
    )
}

export default App
