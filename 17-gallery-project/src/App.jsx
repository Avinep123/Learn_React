import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)
  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)

    setUserData(response.data)



  }

  useEffect(function () {

    getData()


  }, [index])


  let printUserData = <div className='h-screen'><h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading .....</h3></div>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>

        <Card elem={elem} />


      </div>
    })
  }


  return (
    <div className='bg-black h-screen p-2 overflow-auto text-white '>

      <h1 className=' text-2xl bg-blue-400 pl-4 pb-2 rounded text-center mb-5 font-bold' > Photos</h1>
      {/* <button onClick={getData} className='bg-green-600 text-white px-5 py-2 mb-2 rounded hover:bg-green-500  active:scale-95'> Get Data</button> */}
      <div className='flex h-fit flex-wrap gap-4 p-1'>

        {printUserData}

      </div>

      <div className='flex justify-center items-center gap-6 p-4'>
        <button

          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {

            if (index > 1) {
              setUserData([])

              setIndex(index - 1)
            }

          }}
          className='bg-amber-500 cursor-pointer text-black px-4 py-2 text-sm active:scale-94 hover:bg-amber-400 font-semibold rounded '>Prev</button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            if (index < 100) {
              setUserData([])

              setIndex(index + 1)
            }



          }}
          className='bg-amber-500 cursor-pointer text-black px-4 py-2 text-sm active:scale-94 hover:bg-amber-400 font-semibold rounded '>Next</button>
      </div>
    </div>



  )
}

export default App
