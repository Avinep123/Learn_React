import React from 'react'

import RightCardcontent from './RightCardcontent';
const Rightcard = (props) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 bg-red-400 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardcontent color={props.color} id={props.id} tag={props.tag} />

        </div>
    )
}

export default Rightcard
