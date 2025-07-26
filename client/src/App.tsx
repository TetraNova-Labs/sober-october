import { useState } from 'react'
import './App.css'
import config from "./config.ts";

function App() {
  const [count, setCount] = useState(0)
    

  return (
    <>
        <p>
            env config dump (test): {config.apiEndpoint}
        </p>
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    </>
  )
}

export default App
