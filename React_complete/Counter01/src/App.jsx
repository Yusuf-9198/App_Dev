// import React , { useState } from 'react'   
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [variable, function] = useState(initial value)
  let [counter, setCounter] = useState(0)


  const addValue = () => {

    // counter = counter +1 
    // setCounter(counter)

    if (counter < 20) setCounter(counter + 1);



  }
  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);

  }


  return (
    <>
      <h1>React with Chai aur Code</h1>
      <h2>Counter Value : {counter} </h2>
      <button
        onClick={addValue}
      >Add Number</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
