import React, { use, useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)


  useEffect(function () {
    const a = Math.random()
    console.log(a)


  }, [num2])

  return (
    <>
      <h1>{num} & {num2}</h1>
      <button onClick={() => {
        setNum(10 + num);



      }
      }

        onMouseLeave={() => {
          setNum2(100 + num2)
        }}>App</button>
    </>
  )
}

export default App