import {FaTimes}    from 'react-icons/fa'
type TodoProps = {
    display:boolean,
    setDisplay:(display:boolean)=>void
}
const Todos = ({display,setDisplay}:TodoProps) => {

    return (

        <div  className=''>
 
 <header className={`flex flex-row items-center justify-between px-14 py-4 ${display ? 'opacity-10':''}`}>           <h1 className="text-[22px] font-semibold">Todos</h1>

<span className=''>
            <button onClick={()=>setDisplay(true)} className="rounded-md border-[1px] w-[180%] p-2 bg-blue-600 text-white border-blue-600">Add</button>
            </span>


            </header>

            <section>
                <div>
                    {display && (
                        <div className="border-2 w-[50%] rounded absolute bg-white top-1/2 shadow-2xl transform -translate-y-1/2  left-1/2 transform -translate-x-1/2 flex flex-col items-center py-10 px-2 gap-4">
                            <FaTimes onClick={()=>setDisplay(false)} className="absolute top-2 right-2 text-black-500 cursor-pointer"/>
                            <input type="text" className="w-[100%] border-[1px] rounded text-center text-sm p-2" placeholder="Enter what is on your mind"/>
                            <button className="bg-blue-500 p-[1px] rounded w-[30%] text-white">submit</button>
                            </div>
                    )}
                </div>
            </section>
        </div>
      );
}
 
export default Todos;