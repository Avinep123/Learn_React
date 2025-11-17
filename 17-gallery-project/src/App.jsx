import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const getData = async () => {

    const response = await axios.get('https://picsum.photos/v2/list?page=1&limit=30')

    setUserData(response.data)
    console.log(Data)



  }


  let printUserData = 'No User Available'

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div>

        <img className='h-50 w-40' src={elem.download_url} alt="" />

      </div>
    })
  }


  return (
    <div className='bg-black h-screen overflow-auto text-white'>
      <button onClick={getData} className='bg-green-600 text-white px-5 py-2 mt-2 ml-2 rounded hover:bg-green-500  active:scale-95'> Get Data</button>
      <div className='m-5 p-5 flex flex-wrap gap-5 bg-white'>

        {printUserData}

      </div>
    </div>


  )
}

export default App
