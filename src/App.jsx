import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [toDoList, setToDoList] = useState([])
  const [completeTacksCount, setcompleteTacksCount] = useState(0)

  // const handleComplete = (id) => {
  //   let list = toDoList.map((task) => {
  //     let item = {}
  //     if (task.id === id){
  //       if (!task.complete){
  //         setcompleteTacksCount(completeTacksCount + 1)
  //       } else {
  //         setcompleteTacksCount(completeTacksCount - 1)
  //       }
  //       item = {...task, complete: !task.complete}
  //     }
  //     return item
  //   })
  //   setToDoList(list)
  // }
  // console.log(handleComplete())

  const handleSubmit = (e) => {
    e.preventDefault()
    setToDoList(toDoList.concat(input))
    setInput('')
  }

  return (
    <div className="App bg-black w-[100vw] min-h-[100vh] text-white p-[4rem]">
      <h1 className='text-5xl font-[500] text-center underline'>MY TO-DO LIST</h1>
      <form onSubmit={handleSubmit} className='my-[7rem]'>
        <div className='w-[40%]'>
          <div className='flex mb-[2rem]'>
          <input className='border border-white w-[27rem] h-[5rem] focus:outline-none text-black px-[1rem]' type="text" placeholder='Add your lists' value={input} onChange={(e) => setInput(e.target.value)} />
          <button className='p-[1.5rem] border border-white rounded-md font-[500]' type='submit'>Add</button> 
          </div>
      
          <div className='flex gap-[2rem]'>
            <p>Pending tasks: {toDoList.length}</p>
            <p>Completed tasks</p>
          </div>
        </div>

        <div className='w-[30rem] min-h-[0vh] text-black bg-white rounded-md'>
            {toDoList.map((todo, index) => (
              <ul>
                <input type="checkbox" className='mr-[1rem]' />
              <li key={`${todo} - ${index}`}>{todo}</li>
              </ul>
            ))}
        </div>
      </form>
    </div>
  )
}

export default App