import React from 'react'
import { stripHtml } from './helpers/stripHtml';

export default function Hero({ photo, name, title, description }) {
    return (
        <div className='flex min-h-[400px] flex-col  md:flex-row gap-x-10 max-w-screen-2xl mx-auto px-8 mb-12'  >
            <div className='flex-1 grid place-content-center'>
                <img className='md:min-h-[300px]' src={photo} alt={name} />
            </div>
            <div className='flex-1 font-semibold flex flex-col justify-center text-[#373737] '>
                <h4 className='text-xl'>{name}</h4>
                <h1 className='text-4xl md:text-5xl mt-3 md:w-10/12'>{title}</h1>
                <p className='font-medium mt-5 text-lg md:w-10/12'>{stripHtml(description)}</p>
            </div>
        </div>
    )
}


