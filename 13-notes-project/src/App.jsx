import React, { use, useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  function submitHandler(e) {
    e.preventDefault()


    const copyTask = [...task];
    copyTask.push({ title, detail })
    setTask(copyTask)

    setTitle('')
    setDetail('')



  }

  function deleteNote(idx) {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)


  }


  return (
    <>
      <div className='h-screen bg-black text-white lg:flex'>


        <form
          onSubmit={(e) => {
            { submitHandler(e) }
          }} className='flex flex-col lg:w-1/2 items-start p-10  gap-4'>
          <h1 className='text-4xl font-bold'>Add notes</h1>

          <input type="text" placeholder='Enter Notes Heading'
            className='px-5 w-full font-medium py-2 border-2 rounded outline-none'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          <textarea type="text" placeholder="Enter Details" className='px-5 font-medium w-full h-32 py=2 flex items-start flex-row border-2 rounded outline-none'
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value)
            }
            }
          />
          <button className='bg-white active:scale-99 font-medium text-black px-5 py-2  w-full rounded-2 outline-none'
          >Add Note</button>


        </form>

        <div className='flex flex-col  lg:w-1/2  lg:border-l-2 p-10 bg-black'>
          <h1 className='text-4xl font-bold'>Your notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-5  h-screen overflow-auto'>
            {
              task.map(function (elem, idx) {
                return <div key={idx} className=' flex flex-col justify-between items-start h-52 w-40 pt-8 pb-4 relative px-4 text-black rounded-xl bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] bg-cover '>
                  <div>
                    <h3 className='leading-tight text-xl font-bold'>
                      {elem.title}
                    </h3>
                    <p className='mt-4 leading-tight font-semi text-xs text-gray-500'>
                      {elem.detail}
                    </p>
                  </div>
                  <button onClick={() => {
                    deleteNote(idx)

                  }} className='w-full cursor-pointer active:scale-99 bg-red-600 text-white py-1 text-xs rounded font-bold '>Delete</button>
                </div>

              })
            }


          </div>

        </div>
      </div >
    </ >
  )
}

export default App