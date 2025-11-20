import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='nav'>
            <h3>Avi</h3>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Header