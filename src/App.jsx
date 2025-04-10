import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navber from './components/Navber'
import { v4 as uuidv4 } from 'uuid';



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  
  const h_delete=()=>{

  }
  const h_add=()=>{
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    setTodo("")
  }
  const h_edit=()=>{

  }
  const h_change=(e)=>{
    setTodo(e.target.value)
  }

  const h_checkbox=(e)=>{
    let id=e.target.name
    let ind=todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos=[...todos];
    newTodos[ind].isCompleted=!newTodos[ind].isCompleted;
    setTodos(newTodos);

  }

  return (
    <>
      <Navber/>
   
    <div className="conatiner font-bold p-5 mx-auto rounded-xl bg-pink-200 my-5 ">
      <div className="addToDo  ">
        <h2 className='font-bold text-lg  underline pb-5'>Add Your Todos</h2>
        <div className='flex gap-5'>
          <input type="text" className='p-2 py-1 text-slate-800 rounded-lg ' onChange={h_change} value={todo}/>
          <button onClick={h_add} className='bg-purple-700 hover:bg-purple-800 cursor-pointer p-3 rounded-xl py-1 text-white transition-none'>Add</button>
        </div>
      </div>
      <h2 className='font-bold text-lg  underline pb-5 '>Your Todos</h2>
      <div className="todos">
        {todos.map(item=>{
          return <div key={item.id} className='todo flex justify-between my-3'>
            
            <div className={item.isCompleted ? "line-through" : ""}>
            <input type="checkbox" onChange={h_checkbox} value={item.isCompleted} name={item.id} id="" />
            <span className='px-2'>{item.todo}</span>
            </div>
            <div className="buttons">
            <button onClick={h_edit} className='bg-purple-700 hover:bg-purple-800 cursor-pointer p-3 rounded-xl py-1 text-white transition-none'>Edit</button>
            <button onClick={h_delete} className='bg-purple-700 hover:bg-purple-800 cursor-pointer p-3 rounded-xl py-1 text-white transition-none'>Delete</button>
            </div>
          </div>
        })}
      </div>
    </div>
      
    </>
  )
}

export default App
