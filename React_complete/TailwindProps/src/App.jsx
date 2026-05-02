import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  let myObj = {
    name: "yusuf",
    age: 21
  }

  return (
    <>
      <Navbar />
      <div className='p-8'>
        <h1 className='bg-blue-50 text-blue-900 p-4 rounded-xl mb-6 text-2xl font-bold'>Tailwind Navigation Bar</h1>
        <Card username=" Muhammad" btntext='wanna contact' /> {/* Direct Object or array pass nhi kar skte */}
      </div>
    </>
  )
}

export default App
