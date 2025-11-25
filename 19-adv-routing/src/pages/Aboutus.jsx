import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const Aboutus = () => {

    let navigate = useNavigate()

    return (
        <div>

            <button
                onClick={() => {
                    navigate('/')
                }
                }

                className='font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-98'

            >Return to Homepage</button>
            <button
                onClick={() => {

                    navigate(-1)
                }}

                className='font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-98'
            >Back</button>
            <div className='flex justify-center gap-4'>


                <Link className='text-xl font-semibold' to='/aboutus/men'>Men</Link>
                <Link className='text-xl font-semibold' to='/aboutus/women'>Women</Link>
            </div>

            <Outlet />
        </div>


    )
}

export default Aboutus
