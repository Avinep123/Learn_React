import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex p-8 items-centeLink     bg-cyan-900 justify-between'>
            <h2 className='text-xl font-bold'>Avinay</h2>
            <div className='flex gap-8'>
                <Link className='text-lg font-bold' to="/">Home</Link >
                <Link className='text-lg font-bold' to="/aboutus">About us</Link  >
                <Link className='text-lg font-bold' to="/contact">Contact</Link   >
                <Link className='text-lg font-bold' to="/courses">Courses</Link   >
            </div>

        </div>
    )
}

export default Navbar
