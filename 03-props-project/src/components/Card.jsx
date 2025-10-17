import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    return (
        <div className='card'>
            <div>
                <div className='top'>
                    <img src={props.logo} alt=''></img>
                    <button>Save <Bookmark size={12} /> </button>
                </div>
                <div className='center'>
                    <h3>{props.company} <span>5 days ago</span></h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        <h4>{props.tag}</h4>
                        <h4>{props.tag2}</h4>
                    </div>
                </div>
            </div>

            <div className='bottom'>
                <div>
                    <h3>${props.wage}/hr</h3>
                    <p>{props.place}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card