import React, { useState } from 'react'

const helloworld = () => {
    const [num, setnum] = useState([10, 20, 30])
    return (
        <div>
            <button onClick={() => {
                const newNum = [...num]
                newNum.push(99)
                setnum(newNum)
            }}>click here</button>
            <h1> array=[{num}]</h1>
        </div>
    )
}

export default helloworld
