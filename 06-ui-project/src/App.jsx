import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'



const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1736939623999-c7921bf28fd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMG9mZmljZSUyMGNvYXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, corrupti!',
      tag: 'Satisfied',
      color: 'royalblue'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661425828618-f48a8beb4f6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9ybWFsJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, corrupti!',
      tag: 'UnderServed',
      color: 'lightgreen'
    },
    {
      img: 'https://images.unsplash.com/photo-1578324356967-7b8560c41cbf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29hdCUyMG5lcGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, corrupti!',
      tag: 'Satisfied',
      color: 'orange'

    }

  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App