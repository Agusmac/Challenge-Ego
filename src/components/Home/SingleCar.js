import React, { useState } from 'react'

export default function SingleCar({ thumbnail, name, price, year }) {

  const [hovered, setHovered] = useState(false)



// add points to the price, use a package

  return (
    <div className='w-[300px]' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className='relative -mb-10'>
        <h3 className={`text-3xl font-semibold mb-2  ${hovered && 'text-red-600'}`}>{name}</h3>
        <p>{`${year} | $ ${price}`}</p>
      </div>
      {/* setting the height allows me to center the img without using flex box
       on the whole car div (this solution gave a couple problems, and the solutions were too lenghty)
       this probably won't work correctly if the api gets bigger images
      */}
      <div className='flex items-center h-[225px]'>
        <img className='' src={thumbnail} alt={name} />
      </div>
      <div className={`grid place-content-center w-2/3 relative -top-9 py-2 px-2 mx-auto cursor-pointer
       rounded-full text-lg bg-[#191919] text-white duration-200 ${hovered ? 'opacity-100' : 'opacity-0'}`}><h5>Ver Modelo</h5></div>
    </div>
  )
}

