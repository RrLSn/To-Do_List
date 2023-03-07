import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-black w-[100vw] h-[100vh] text-white p-[4rem]">
      <h1 className='text-5xl font-[500] text-center underline'>MY TO-DO LIST</h1>
      <form className=' my-[7rem]'>
      <input className='border border-white w-[25rem] h-[5rem] focus:outline-none text-black px-[1rem] mb-[4rem]' type="text" />
        <div>
          <input className='w-[1.5rem] h-[2rem]' type="checkbox" />
          <label className='mx-[1rem] text-[1.5rem]'>hshdhdh</label>
        </div>
      </form>
    </div>
  )
}

export default App
