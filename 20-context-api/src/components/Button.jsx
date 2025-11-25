import React from 'react'
import { useContext } from 'react'
import ThemeContext, { ThemeDataContext } from '../context/ThemeContext'

const Button = () => {

    const [theme, settheme] = useContext(ThemeDataContext)
    return (
        <div>

            <button onClick={() => {
                if (theme == 'light') {

                    settheme('Dark')
                } else {
                    settheme('light')
                }

            }}>Change theme </button>
        </div>
    )
}

export default Button