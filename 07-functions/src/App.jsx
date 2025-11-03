import React from 'react'
import Boxelem from './components/Boxelem'
import './App.css'

const App = () => {

  return (
    <div>
      <h1>Hello</h1>
      <input onChange={(elem) => console.log(elem.target.value)} type='text' placeholder='Enter Name' />
      <Boxelem />

    </div>
  )
}

export default App