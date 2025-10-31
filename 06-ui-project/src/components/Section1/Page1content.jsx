import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const Page1content = (props) => {
    return (
        <div className='pb-16 pt-6 gap-10 flex items-center justify-between h-[90vh]  px-18'>
            <Leftcontent />
            <Rightcontent users={props.users} />
        </div>
    )
}

export default Page1content