import React from 'react'
import Card from "./components/Card"

const App = () => {
  return (
    <div className='parent'>
      <Card username="Avinay" age={21} img="https://plus.unsplash.com/premium_photo-1757914030558-8bfe827a4075?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1243" />
      <Card username="Bikash" age={25} img="https://plus.unsplash.com/premium_photo-1760023732601-87a1b3ff9f76?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" />
      <Card username="Kaushal" age={22} img="https://images.unsplash.com/photo-1733758839991-a750b4ae0e7a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" />
      <Card username="Namkha" age={21} img="https://images.unsplash.com/photo-1753710877908-c6111ffcad4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1700" />
      <Card username="Sakar" age={22} img="https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332" />
      <Card username="Raj" age={21} img="https://images.unsplash.com/photo-1759327718818-0cfee2207279?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1228" />

    </div>
  )
}

export default App
