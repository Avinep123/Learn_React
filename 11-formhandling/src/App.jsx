import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted');
  }
  return (
    <>
      <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <input type="text" name="name" placeholder="Give name" />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App