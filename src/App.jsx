import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState("")
  const [toDoList, setToDoList] = useState([])
  const [checkBox, setCheckBox] = useState(0)

  const handleChange = (e) => {
    setTodos(e.target.value)
  }

  const addTask = (e) => {
  e.preventDefault();
  const newTodoList = toDoList.concat({ todo: todos, isCompleted: false, id: Math.floor(Math.random()*1000)})
  setToDoList(newTodoList)
  setTodos('')
  }
  
  const handleComplete = (element) => {
    const newTodoList = toDoList.map((todo, index) => {
      if (element === index){
        return{
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })
    setToDoList(newTodoList)
  }

  const deleteTask = (e, id) => {
    e.preventDefault();
    setToDoList(toDoList.filter((t) => t.id != id))
  }


  const handlecheckbox = () => {
    toDoList.isCompleted? setCheckBox(checkBox + 1) : setCheckBox(checkBox - 1)
  }

  

  return (
    <div className="App bg-black  text-white p-[4rem]">
      <h1 className='text-5xl font-[500] text-center underline'>MY TO-DO LIST</h1>
      <div className='my-[7rem]'>
        <div className='w-[40%]'>
          <form onSubmit={addTask} className='flex mb-[2rem]'>
            <input type="text" placeholder='Add your lists' className='border border-white w-[27rem] h-[5rem] focus:outline-none text-black px-[1rem]' id='text' value={todos} onChange={(e) => handleChange(e)} />
            <button className='p-[1.5rem] border border-white rounded-md font-[500]'>Add</button> 
          </form>
      
          <div className='flex gap-[2rem]'>
            <p>Pending tasks: {toDoList.length - checkBox}</p>
            <p>Completed tasks: {checkBox}</p>
          </div>
        </div>

        <div className='w-[30rem] min-h-[0vh] text-black bg-white rounded-md'>
          {toDoList.map((tl,index) => (
          <div key={index} className={`flex justify-between p-[1rem]`}>

            <div className='w-[10rem] flex gap-[5rem]' onClick={()=> handleComplete(index)}>
              <input type="checkbox" 
              checked={tl.isCompleted}
              value={checkBox} 
              />  
              < span className={tl.isCompleted ? 'holdtext' : "text"}>{tl.todo}</span>
            </div>

            <button className='bg-[red] text-white rounded-md p-[0.3rem] delete' onClick={(e) => deleteTask(e,tl.id)}>Delete</button>

          </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App