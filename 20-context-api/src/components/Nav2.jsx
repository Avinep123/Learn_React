import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'




const Nav2 = () => {

    const [theme, settheme] = useContext(ThemeDataContext)



    return (
        <div className='nav2'>
            <h4>Home</h4>
            <h4>About Us</h4>
            <h4>Contact</h4>
            <h4>{theme}</h4>
        </div>
    )
}

export default Nav2