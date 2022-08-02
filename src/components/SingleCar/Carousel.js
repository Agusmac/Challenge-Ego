
import React, { useEffect, useState } from 'react'
import { CarouselData } from './CarouselData'


export default function Carousel({ }) {

  // i removed the props to use invented data

  const [currentItem, setCurrentItem] = useState(0)

  function nextCard() {
    if ((currentItem + 1) > (CarouselData.length - 1)) {
      setCurrentItem(0)
    } else {
      setCurrentItem((prev) => prev + 1)
    }
  }
  function prevCard() {
    if ((currentItem + -1) < 0) {
      setCurrentItem(CarouselData.length - 1)
    } else {
      setCurrentItem((prev) => prev - 1)
    }
  }


  useEffect(() => {
    document.getElementById(currentItem).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    console.log(currentItem)
  }, [currentItem])

  return (
    <div className='bg-gray-200 py-12 '>
      <div className='relative flex'>
        <div className='bg-gray-200 opacity-70 hidden md:flex cursor-pointer px-1' onClick={prevCard}>
          <div className='pt-28 w-7'><img src="/chevron-left.svg" alt="" className='h-7 w-7' /></div>
        </div>
        <div className='flex overflow-x-scroll duration-1000 no-scrollbar px-8'>
          {CarouselData.map((item, index) =>
            <div key={index} id={index} className='min-w-[300px] md:min-w-[350px] duration-1000 pl-7' >
              <div className=''>
                <img className='rounded-lg md:w-[350px] duration-1000 ' src={item?.image} alt="" />
                <h5 className='font-semibold mt-4 mb-3 text-lg'>{item.name}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          )}
        </div>
        <div className='bg-gray-200 opacity-70 hidden md:flex cursor-pointer px-1' onClick={nextCard}>
          <div className='pt-28 w-7'><img src="/chevron-right.svg" alt="" className='h-7 w-7' /></div>
        </div>
        {/* <div className='absolute inset-0 hidden md:flex justify-between'>
            <div className='bg-gray-200 opacity-100 flex items-center px-2'>abc</div>
            <div className='bg-gray-200 opacity-100 flex items-center px-2'>abc</div>
          </div> */}

      </div>
      <div className='flex mx-auto mt-7 w-full justify-evenly px-5 md:justify-center space-x-3 md:space-x-8'>
        {CarouselData.map((item, index) =>
          <div key={index} onClick={() => setCurrentItem(index)} className={`duration-300 cursor-pointer ${currentItem == index ? 'w-14 bg-gray-400' : 'w-4 bg-gray-300'} h-4 rounded-full `}></div>
        )}
      </div>
    </div>
  )
}


