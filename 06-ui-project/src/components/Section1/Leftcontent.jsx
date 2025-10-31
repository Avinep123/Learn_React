import React from 'react'
import Herotext from './Herotext';
import Arrow from './Arrow';

const Leftcontent = () => {
    return (
        <div className='h-full flex justify-between flex-col w-1/3'>
            <Herotext />
            <Arrow />

        </div>

    )
}

export default Leftcontent