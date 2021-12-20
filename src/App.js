import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'


function App() {
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

// delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <h1>Hello from React</h1>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
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

