import { useState } from 'react';
import axios from 'axios';
import './AddTodos.css'
export default function AddTodos({ fetchTodos}) {
    const [ todo, setTodo ] = useState("");

    const addTodo = async () => {
        if(todo.trim() == "") return
        try {
            const res = axios.post('http://localhost:5000/todos',{
                title: todo,
                status: false
            });
        } catch (error) {
            
        }
        finally {
            fetchTodos()
        }
    }
    return <>
        <input type="text" value={ todo } onChange={e => setTodo(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
    </>
}