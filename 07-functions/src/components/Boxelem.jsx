import React from 'react'

const Boxelem = () => {
    return (
        <div className='box' onMouseMove={(elem) => { console.log(elem.clientY) }}></div>
    )
}

export default Boxelem