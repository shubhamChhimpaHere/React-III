import { useEffect, useState } from 'react'
import AddTodos from './components/AddTodos'
import DisplayTodos from './components/DisplayTodos'
import axios from 'axios';
import './App.css'
import PageStrip from './components/PageStrip';

function App() {
  const [ todos, setTodos ] = useState([]);
  const [ err , setErr] = useState(false);
  const [ loading , setLoading ] = useState(false);
  const [page, setPage] = useState(1);
  const [totalRes, setTotalRes] = useState(5);
  const [limit, setLimit] = useState(5);
  
  const fetchTodos = async () => {
    setLoading(true)
    try {
      
      const res = await axios.get(`http://localhost:5000/todos?_limit=${limit}&_page=${page}`);
     
      setTodos(res.data)
      setTotalRes(res.data.length)
    } catch (error) {
      setErr(err)
    }
    finally{
      setLoading(false)
    }

  }
  

  useEffect(() => {
    fetchTodos()
  }, [ page ])

 
  if(err) {
    return <h1>Error: {err }</h1>
  }
  if(loading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
    <h1>Add Todos here</h1>
    <AddTodos fetchTodos = { fetchTodos }/>
    <h1>Todos</h1>
    <DisplayTodos todos = {todos} fetchTodos = { fetchTodos }/>
    <PageStrip totalRes = { totalRes } page = {page} setPage = {setPage}/>
    </>
  )
}

export default App
