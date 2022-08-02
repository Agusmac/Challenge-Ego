import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavMenu from './NavMenu'

export default function Navbar({ isHome }) {

    const [isOpen, setIsOpen] = useState(false)

    const Hamburguer = "/icon-hamburger-2.svg"

    return (
        <div className='flex border-b bg-white border-[#CCCCCC] w-full h-[70px] items-center justify-between sticky top-0 md:relative z-10 '>
            <div className='flex mx-8 items-center'>
                <Link to={'/'}><img src="/ego-logo.svg" alt="" className='h-10 w-10 ' /></Link>
                <div className='hidden md:flex ml-20 font-semibold'>
                    <Link to={'/'}><div className={`h-[70px] grid place-content-center px-9 ${isHome && 'text-red-500 border-b-red-500 border-b-4'}`}><h5>Modelos</h5></div></Link>
                    <div className={`h-[70px] grid place-content-center px-9 ${!isHome && 'text-red-500 border-b-red-500 border-b-4'}`}><h5>Ficha de modelo</h5></div>
                </div>
            </div>
            <div className='flex mx-8 items-center space-x-5'>
                <h5 className='hidden md:block'>Menu</h5>
                <img src={Hamburguer} className={`h-7 cursor-pointer`} alt="icon" onClick={() => setIsOpen(!isOpen)} />
                <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </div>
    )
}
