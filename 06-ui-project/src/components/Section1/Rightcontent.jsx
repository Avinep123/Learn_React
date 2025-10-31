import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
    return (
        <div id="right" className='h-full rounded-4xl overflow-x-auto flex-nowrap w-2/3 p-6 flex gap-5'>
            {props.users.map(function (elem, idx) {
                return <Rightcard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
            })}

        </div>
    )
}

export default Rightcontent