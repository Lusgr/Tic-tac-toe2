import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Board from './Board'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Board/>
     </div>
    </>
  )
}

export default App
