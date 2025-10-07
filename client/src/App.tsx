import React from 'react'
import Chat from './components/Chat'
import "./App.css"
function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col '>
      <h1>Mini Social Media app - Real time chat </h1>
      <Chat/>

    </div>
  )
}

export default App