import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

type TodoProps = {
  display: boolean;
  setDisplay: (display: boolean) => void;
};

const Todos = ({ display, setDisplay }: TodoProps) => {
  const [text, setText] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const addData = () => {
    if (text.trim() !== '') {
        setTodos([...todos, text]);
        setText(''); 

      }
  };

  const handleDelete = (index: number) => () => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };
  
 
  
  
  
  return (
    <div>
      <header className="flex items-center justify-between px-14 py-4">
        <h1 className="text-2xl font-semibold">Todos</h1>
        <span>
          <button
            onClick={() => setDisplay(true)}
            className="rounded-md border-[1px] w-[180%] p-2 bg-blue-600 text-white border-blue-600"
          >
            Add
          </button>
        </span>
      </header>

      <section>
        <div>
          {display && (
            <div className="border-2 w-[50%] rounded absolute bg-white top-1/2 shadow-2xl transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 flex flex-col items-center py-10 px-2 gap-4 z-20">
              <FaTimes
                onClick={() => setDisplay(false)}
                className="absolute top-2 right-2 text-black-500 cursor-pointer"
              />
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-[100%] border-[1px] rounded text-center text-sm p-2"
                placeholder="Enter what is on your mind"
              />
              <button
                onClick={() => addData()}
                className="bg-blue-500 p-[1px] rounded w-[30%] text-white"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center gap-4 mt-10">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-[90%] border-[1px] p-2 rounded"
            >
              <p className="text-sm">{todo}</p>
              <span className=''>     
 
              <button
                onClick={handleDelete(index)}
                className="bg-red-500 p-[1px] rounded w-[100%] text-white"
              >
                Delete
              </button>
                </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Todos;
