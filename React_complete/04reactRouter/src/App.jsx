import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenet/Header/Header'
import Footer from './componenet/Footer/Footer'
import Home from './componenet/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers />
      <Home />
      <Footer />
    </>
  )
}

export default App
