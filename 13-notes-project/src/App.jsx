import React from 'react'

const App = () => {
  return (
    <>
      <div className='h-screen bg-black text-white'>

        <form className='flex justify-between items-start  p-10 '>
          <div className='flex flex-col  text-white gap-4'>
            <input type="text" placeholder='Enter Notes Heading'
              className='px-5 w-full py-2 border-2 rounded outline-none' />
            <textarea type="text" placeholder="Enter Details" className='px-5 w-full h-20 py=2 flex items-start flex-row border-2 rounded outline-none' />
            <button className='bg-white text-black px-5 py-2  w-full rounded-2 outline-none'>Add Note</button>
          </div>
          <img className='rotate-y-180 h-52' src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png" alt="" />

        </form>
      </div>
    </>
  )
}

export default App