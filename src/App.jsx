import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [toDoList, setToDoList] = useState([])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App bg-black w-[100vw] min-h-[100vh] text-white p-[4rem]">
      <h1 className='text-5xl font-[500] text-center underline'>MY TO-DO LIST</h1>
      <div className='my-[7rem]'>
        <div className='w-[40%]'>
          <div className='flex mb-[2rem]'>
          <input type="text" placeholder='Add your lists' className='border border-white w-[27rem] h-[5rem] focus:outline-none text-black px-[1rem]' id='text' value={input} onChange={(e) => handleChange()} />
          <button className='p-[1.5rem] border border-white rounded-md font-[500]' onClick={addTask}>Add</button> 
          </div>
      
          {/* <div className='flex gap-[2rem]'>
            <p>Pending tasks: {toDoList.length}</p>
            <p>Completed tasks</p>
          </div> */}
        </div>

        <div className='w-[30rem] min-h-[0vh] text-black bg-white rounded-md'>
          {toDoList.map((todo,index) => (
          <ul key={index} className='flex justify-between p-[1rem]'>
            <input type="checkbox"/>
            <li>{todo.value}</li>
            <button className='bg-black text-white rounded-md p-[0.3rem]'>Delete</button>
          </ul>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App



// const addTask = () => {
//   if(input !== ""){
//     const taskDetails = {
//       id: Math.floor(Math.random*1000),
//       value: input,
//       isCompleted: false,
//     }
//     setToDoList([...toDoList, taskDetails])
//     setInput('')
//   }
  
// }