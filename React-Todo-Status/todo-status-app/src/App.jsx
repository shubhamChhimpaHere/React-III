import { useState } from "react"
import "./App.css"

function App() {

  const [text, setText] = useState(null);
  const [tasks, setTasks] = useState([]);

  function handleText(e) {
    setText(e.target.value);
  }

  function handleTask() {

    if(text.trim() === "") {
      return 
    }

    let obj = {
      id: new Date(),
      title: text.trim(),
      status: false
    }

    let newTasks = [...tasks, obj]
    console.log(tasks)
    setTasks(newTasks)
    console.log(tasks)
    setText("")
  }

  function handleStatus(id) {

    let val  =  prompt(`enter 'yes' if task is completed! `)
    if(val !== "yes") return;

    let newArr = tasks.map((task) => {
      if(task.id == id) {
        task.status = !task.status
      }
      
      return task;
    })

    setTasks(newArr)
  }


  function deleteTask(id) {
    let val  =  prompt(`enter 'yes' for delete: `)

    if(val !== 'yes') return
    
    let newArr = tasks.filter(task => task.id !== id)
    setTasks(newArr)
  }

  return (
    <>


      <table border={1}>
        <thead>
          <tr >
            <td>
              <input type="text" value={text} style={{ width: "100%", height: "100%" }} onChange={handleText} placeholder="enter task here..." />
            </td>
            <td>
              <button style={{ width: "100%", height: "100%" , cursor:"pointer", backgroundColor: "blueviolet"}} onClick={handleTask}>add task</button>
            </td>
          </tr>
          <tr style={{backgroundColor: "black", color: "white"}}>
            <th>task</th>
            <th>status</th>
            
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task) => (
              <tr key={ task.id }>
                <td>{ task.title }</td>
                {
                  task.status ? <td style={{ color: "green"}}> Completed </td> : <td  onClick={ () => {handleStatus(task.id)}} style={{ color : "red", cursor : "pointer"}}>Pendding</td>
                }
                <td onClick={ () => {
                  deleteTask(task.id)
                }} style={{cursor: "pointer", backgroundColor: "red"}}>delete</td>
              </tr>
            ))
          }
          
        </tbody>
      </table>
    </>
  )
}

export default App
