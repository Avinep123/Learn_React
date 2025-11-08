import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Helloworld from './components/helloworld'

function App() {
  const [count, setCount] = useState(0)
  const [user, setuser] = useState({ user: 'Avinay', age: '22' })

  const btnclick = () => {
    const newNum = { ...user }
    newNum.user = 'Ajay'
    newNum.age = '23'
    setuser(newNum)

  }

  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}

        </button><br />
        <button onClick={btnclick}>click for change</button>
        {user.user},{user.age}
        <Helloworld />
      </div>


    </>
  )
}

export default App
