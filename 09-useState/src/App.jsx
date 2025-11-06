import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [user, setuser] = useState('Avi')

  function changeNum() {
    setNum(20)
    setuser('Avinay')
  }

  return (
    <div>
      <h1>
        Value of num is {num} <br />
        {user}
      </h1>
      <button onClick={changeNum}>
        Click
      </button>
    </div>
  )
}

export default App