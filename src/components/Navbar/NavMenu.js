import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMenu({ setIsOpen, isOpen }) {

    const Cross = "/icon-close-2.svg"

    const Links = {
        a: ['Modelos', 'Servicios y Accesorios', 'Financiación', 'Reviews y Comunidad'],
        b: ['Toyota Mobility Service', 'Toyota Gazoo Racing', 'Toyota Híbridos'],
        c: ['Concesionarios', 'Test Drive', 'Contacto'],
        d: ['Actividades', 'Servicios al Cliente', 'Ventas Especiales', 'Innovación', 'Prensa', 'Acerca de...']
    }

    return (
        <div className={`fixed z-50 overflow-hidden max-h-screen bg-white w-screen md:w-96 right-0 border-l border-[#CCCCCC]
                 top-[70px] md:top-0 bottom-0 duration-500 ease-out text-right text-xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='p-7 px-9 pb-0 '>
                <div className='flex items-center  justify-end cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                    <p className='text-base'>Cerrar</p>
                    <img src={Cross} className={`h-[21px] ml-3`} alt="icon" />
                </div>

                <div className='md:mt-4  p-9 py-6 md:py-8 space-y-3 border-b border-[#E9E9E9]'>
                    {Links.a.map((item, i) => <Link key={i} to={'/'}><h4  onClick={() => setIsOpen(false)}  className='cursor-pointer'>{item}</h4></Link>)}
                </div>

                <div className='p-9 py-6 md:py-8 space-y-3 border-b border-[#D1D1D1]'>
                    {Links.b.map((item, i) => <Link key={i} to={'/'}><h4  onClick={() => setIsOpen(false)} className='cursor-pointer'>{item}</h4></Link>)}
                </div>

                <div className='p-9 py-6 md:py-8 space-y-3 '>
                    {Links.c.map((item, i) => <Link key={i} to={'/'}><h4  onClick={() => setIsOpen(false)}  className='cursor-pointer'>{item}</h4></Link>)}
                </div>
            </div>
            <div className='bg-[#EFEEEF] px-9'>
                <div className=' px-9 pt-6 md:pt-8 space-y-3 pb-80 '>
                    {Links.d.map((item, i) => <Link key={i} to={'/'}><h4  onClick={() => setIsOpen(false)} className='cursor-pointer'>{item}</h4></Link>)}
                </div>
            </div>
        </div>
    )
}
