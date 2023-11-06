import { useState } from 'react'
import './App.css'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
        <h1 className="text-3xl font-bold underline">Hello World!</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

    </>
  )
}

export default App
