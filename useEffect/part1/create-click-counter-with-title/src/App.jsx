import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  const [count, setCount] = useState(0)
  useEffect(() => {
      document.title = `clicked ${count} times`
    
    }, [ count ])
    
  
  
  
  return (
    <>
    <button onClick={ () => setCount(count + 1)}>
          Button
        </button>
     
    </>
  )
}

export default App
