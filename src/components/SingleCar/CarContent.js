import React from 'react'
import { stripHtml } from './helpers/stripHtml'

export default function CarContent({ content,reverse }) {

    
    return (
        <div className={`flex flex-col-reverse ${reverse?'md:flex-row-reverse':'md:flex-row'} gap-10 mb-10`}>
            <div className='flex-1 font-semibold flex justify-center items-center text-[#373737] '>
            <div className='md:w-3/4'>
                <h4 className='text-xl'>{content?.title}</h4>
                <p className='font-medium mt-5 text-lg '>{stripHtml(content?.content)}</p>
                </div>
            </div>
            <div className='flex-1 grid place-content-center'>
                <img src={content?.image} alt={content?.title} />
            </div>
        </div>
    )
}
