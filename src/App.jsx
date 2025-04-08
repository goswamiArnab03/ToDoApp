import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navber from './components/Navber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navber/>
   
    <div className="conatiner font-bold p-5 mx-auto rounded-xl bg-pink-200 my-5 justify-items-center align-middle">
      <div className="addToDo max-w-[80%] ">
        <h2 className='font-bold text-lg text-center underline pb-5 align-middle'>Add Your Todos</h2>
        <div className='flex justify-between gap-5'>
        <input type="text" className='p-2 py-1 text-slate-800 rounded-lg ' onChange={change} value={todo}/>
        <button className='bg-purple-700 hover:bg-purple-800 cursor-pointer p-3 rounded-xl py-1 text-white transition-none'>Add</button>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
