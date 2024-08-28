import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "izza",
    age: 98
  }
  let newArr = [1, 2, 3]
  return (
    <>
      <h1 className='bg-pink-700 text-white p-2 rounded-full'>Izza Shahzad</h1>
      <Card username="IzzaShahzad" btnText="click me" />
      <Card username="izzah" />
    </>
  )
}

export default App
