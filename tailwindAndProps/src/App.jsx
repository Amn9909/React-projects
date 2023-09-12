import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './components/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'> test tailwind</h1>
    < Example op1 = "aman" op2 = "azm" op3 = "attu" />
    </>
  )
}

export default App


