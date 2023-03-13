import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [toDoList, setToDoList] = useState([])
  const [CompletedTask, setCompletedTask] = useState(true)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const addTask = () => {
  if(input !== ""){
    const taskDetails = {
      id: Math.floor(Math.random() * 1000),
      value: input,
      isCompleted: false,
    }
    setToDoList([...toDoList, taskDetails])
    setInput('')
  }
  }

  // const handleDelete = (e, id) => {
  //   e.preventDefault();
  //   setToDoList(toDoList.filter(t) => t.id != id)
  // }
  

  const handleComplete = (e, id) => {
    e.preventDefault();

    //Find index
    const elements = toDoList.findIndex(element => element.id == id);

    //copy array into new variable
    const newTodoList = [...toDoList]

    //edit elements
    newTodoList[elements] = {
      ...newTodoList[elements],
      isCompleted: CompletedTask,
    }
    console.log(newTodoList[elements])
    console.log(newTodoList)

    setToDoList(newTodoList)
    // console.log(setToDoList(newTodoList))
  }


  return (
    <div className="App bg-black  text-white p-[4rem]">
      <h1 className='text-5xl font-[500] text-center underline'>MY TO-DO LIST</h1>
      <div className='my-[7rem]'>
        <div className='w-[40%]'>
          <div className='flex mb-[2rem]'>
            <input type="text" placeholder='Add your lists' className='border border-white w-[27rem] h-[5rem] focus:outline-none text-black px-[1rem]' id='text' value={input} onChange={(e) => handleChange(e)} />
            <button className='p-[1.5rem] border border-white rounded-md font-[500]' onClick={addTask}>Add</button> 
          </div>
      
          <div className='flex gap-[2rem]'>
            <p>Pending tasks: {toDoList.length}</p>
            <p>Completed tasks: {}</p>
          </div>
        </div>

        <div className='w-[30rem] min-h-[0vh] text-black bg-white rounded-md'>
          {toDoList.map((todo,index) => (
          <ul key={index} className={`flex justify-between p-[1rem]`}>
            <input type="checkbox" checked={todo.isCompleted} />  
            <li className={todo.isCompleted ? 'holdtext' : "text"}>{todo.value}</li>

            <div className='flex gap-[1rem]'>
              <button className='bg-black text-white rounded-md p-[0.3rem]' onClick={(e) => {
                handleComplete(e, todo.id) 
                setCompletedTask(!CompletedTask)}}>Completed</button>

             <button className='bg-black text-white rounded-md p-[0.3rem]'>Delete</button>
            </div>
          </ul>
            ))}
        </div>
      </div>
    </div>
  )
}

export default App


const handleComplete = (id) => {
  let list = todoList.map((task) => {
    let item = {};
    if (task.id == id) {
      if (!task.complete){
          //Task is pending, modifying it to complete and increment the count
          setCompletedTaskCount(completedTaskCount + 1);
      } 
      else {
          //Task is complete, modifying it back to pending, decrement Complete count
          setCompletedTaskCount(completedTaskCount - 1);
      }
item = { ...task, complete: !task.complete };
    } else item = { ...task };
return item;
  });
  setTodoList(list);
};