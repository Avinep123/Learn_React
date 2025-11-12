import React from 'react'

const App = () => {

  const user = {
    username: 'Avinay',
    age: 22

  }

  localStorage.setItem('user', JSON.stringify(user))

  const user1 = localStorage.getItem('user')

  console.log(JSON.parse(user1))


  return (
    <div>App</div>
  )
}

export default App