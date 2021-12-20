import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'


function App() {
  const [showAddTask, setShowAddTask] =  useState(false)
  const [tasks,setTasks] = useState([
    {
        id:1,
        text: 'Doctors Meet up',
        day: '5th of Feb, 230 pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Meet up at School',
        day: '9th of Feb, 330 pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Random ass meet',
        day: '19th of Feb, 1000am',
        reminder: false,
    },  
] 
)

// add new task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// toggle reminder for the task
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to be shown.'
      }
    </div>
  );
}
export default App
// import React from 'react'
// class App extends React.Component{
//   render(){
//     return <h1>HELLO FROM CLASS!!!</h1>
//   }
// }

