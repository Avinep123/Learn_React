import React from 'react'
import axios from 'axios'

const App = () => {

    /*Using fetch method*/
    /*Using Normal Function*/
    async function getdat() {

        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        console.log(response)




    }

    /*Using Arrow Function*/
    const getData = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await resp.json()
        console.log(data)
    }

    /*Using Axios*/


    const getDataAxios = async () => {

        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data)

    }



    return (
        <div>
            <button onClick={getData}>Get Data</button>
            <button onClick={getDataAxios}>Get Data</button>
        </div>
    )
}

export default App
