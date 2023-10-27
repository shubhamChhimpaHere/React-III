import './DisplayTodos.css';
import axios from 'axios';
export default function DisplayTodos({todos, fetchTodos}) {
   const toggleStatus = async (id, status) => {
    try {
        const res = await axios.patch(`http://localhost:5000/todos/${id}`,{
            status : !status
        })
    } catch (error) {
        
    }
    finally{
        fetchTodos()
    }
   }
   const deleteTodo = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:5000/todos/${id}`)
    } catch (error) {
        
    }
    finally{
        fetchTodos()
    }
   }
   if(todos.length == 0) return <>
     <div className='todo'>
            <span className= { `todo-item` }>
                 your todo is empty
                </span>
        </div>
   </>
    return <>
       {todos.map(todo => 
        <div key={todo.id} className='todo'>
            <span onClick={() => toggleStatus(todo.id, todo.status)} className= { `todo-item ${!todo.status ? "pending": "completed"}` }>
            <input type="checkbox" id={todo.id} checked = {todo.status} style={{cursor: "pointer"}} readOnly/>
                <label htmlFor={todo.id}>
                     {todo.title} 
                    
                    </label>
                </span>
            <button className='delete-btn' onClick={() => {deleteTodo(todo.id)}}>Delete</button>
        </div>
       )}
    </>
}