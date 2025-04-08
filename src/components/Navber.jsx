import React from 'react'

const Navber = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-4 '>
      
        <p className='font-bold gap-4 mx-8 text-xl'>Tasks</p>
      
      <ul className='flex gap-8 mx-8'>
        <li className='cursor-pointer hover:font-bold transition-all duration-75'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-75'>Your Task</li>
      </ul>
    </nav>
  )
}

export default Navber
