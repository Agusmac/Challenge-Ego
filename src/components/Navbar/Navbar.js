import React, { useState } from 'react'
import NavMenu from './NavMenu'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [isHome, setIsHome] = useState(true)

    const Hamburguer = "/icon-hamburger.svg"
    const Cross = "/icon-close.svg"

    return (
        <div className='flex border-b border-[#CCCCCC] w-full h-[70px] items-center justify-between'>
            <div className='flex mx-8 items-center'>
                <img src="/ego-logo.svg" alt="" className='h-10 w-10 ' />
                <div className='hidden md:flex ml-20 font-semibold'>
                    <div className={`h-[70px] grid place-content-center px-9 ${isHome && 'text-red-500 border-b-red-500 border-b-4'}`}><h5>Modelos</h5></div>
                    <div className={`h-[70px] grid place-content-center px-9 ${!isHome && 'text-red-500 border-b-red-500 border-b-4'}`}><h5>Ficha de modelo</h5></div>
                </div>
            </div>
            <div className='flex mx-8 space-x-5'>
                <h5 className='hidden md:block'>Menu</h5>
                <img src={Hamburguer} className={`h-[21px] cursor-pointer`} alt="icon" onClick={() => setIsOpen(!isOpen)} />
                <NavMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </div>
    )
}
