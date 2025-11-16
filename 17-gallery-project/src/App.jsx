import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = () => {

    axios.get()



  }
  return (
    <div className='bg-black h-screen text-white'>
      <button onClick={getData} className='bg-green-600 text-white px-5 py-2 mt-2 ml-2 rounded hover:bg-green-500  active:scale-95'> Get Data</button>
    </div>
  )
}

export default App
