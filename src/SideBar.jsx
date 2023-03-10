import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <nav className='w-full bg-transparent flex flex-col justify-center items-center     sticky top-0 bottom-0 h-screen'>

            <Link to={"/home"} className='w-20 h-20 rounded-full bg-insta-new-gradient text-white flex justify-center items-center my-2'>
                <span className="material-symbols-outlined">
                    home
                </span>
            </Link>
                    
            <Link to={"/portfolio"} className='w-20 h-20 rounded-full bg-insta-new-gradient text-white flex justify-center items-center my-2'>
                <span className="material-symbols-outlined">
                    code
                </span>
            </Link>
                    
            <div className='w-20 h-20 rounded-full bg-insta-new-gradient text-white flex justify-center items-center my-2'>
                <span className="material-symbols-outlined">
                    receipt_long
                </span>
            </div>
                    
            <div className='w-20 h-20 rounded-full bg-insta-new-gradient text-white flex justify-center items-center my-2'>
                <span className="material-symbols-outlined">
                    mail
                </span>
            </div>
                    
           
        </nav>
    )
}
