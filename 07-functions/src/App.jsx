import React from 'react'

const App = () => {

  return (
    <div>
      <h1>Hello</h1>
      <input onChange={(elem) => console.log(elem.target.value)} type='text' placeholder='Enter Name' />RE

    </div>
  )
}

export default App