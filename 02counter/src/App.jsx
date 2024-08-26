import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState (77)
 
 const addValue =()=> {
  counter = counter +1
  setCounter(counter)
  console.log("Clicked", counter);
 }

 const removeValue =()=> {
  counter = counter -1
  setCounter(counter)
 }
  return (
    <>
     <h1>Izza Shahzad</h1>
     <h2>Counter Value : {counter}</h2>
     <button
     onClick={addValue}
     >Add Value {counter}</button>
     <br/>
     <button 
     onClick={removeValue}
     >Remove Value {counter}</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
