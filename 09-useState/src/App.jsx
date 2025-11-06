import React, { use, useEffect, useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const [user, setuser] = useState('Avi')

  function changeNum() {

    const newName = prompt("Give name");
    if (newName) setuser(newName);

  }


  function increase() {
    setNum(num + 1)
  }
  function decrease() {
    setNum(num - 1)
  }
  function Jumpby5() {
    setNum(num + 5)
  }


  useEffect(() => {
    changeNum();
  }, []);

  return (
    <div>
      <h1 className='hello'>Welcome ,  {user}</h1>
      <h1>
        {num}

      </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button><br />
      <button onClick={Jumpby5}>Jumpby5</button>
    </div >
  )
}

export default App