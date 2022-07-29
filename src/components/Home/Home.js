import React, { useState } from 'react'
import CarsGrid from './CarsGrid'




export default function Home() {

    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [filter, setfilter] = useState('all')

    const [isOrderOpen, setIsOrderOpen] = useState(false)
    const [order, setOrder] = useState('default')

    const filterArray = [
        { text: 'Todos', category: 'all' },
        { text: 'Autos', category: 'cars' },
        { text: 'Pickups y Comerciales', category: 'pickups' },
        { text: 'SUVs y Crossovers', category: 'suvs' }
    ]
    const orderArray = [
        { text: 'Nada', category: 'default' },
        { text: 'De menor a mayor precio', category: 'minorPrice' },
        { text: 'De mayor a menor precio', category: 'biggerPrice' },
        { text: 'Más nuevos primero', category: 'newer' },
        { text: 'Más viejos primero', category: 'older' }
    ]


    function handleFilter(category) {
        setfilter(category)
        setIsFilterOpen(false)
    }
    function handleOrder(category) {
        setOrder(category)
        setIsOrderOpen(false)
    }


    return (
        <div className='w-full mx-auto px-8 max-w-screen-2xl'>
            <div className='size text-4xl md:text-[55px] md:leading-[4rem] font-bold text-[#373737] mt-12 md:mt-20'>
                <h1>Descubrí todos los modelos </h1>
            </div>

            <div className='flex w-full border-b border-[#D8D8D8] mt-20 justify-between py-3 items-center'>

                <div className='relative lg:hidden'>
                    <div className='cursor-pointer flex items-center space-x-2' onClick={() => setIsFilterOpen(!isFilterOpen)}>
                        <h5 className='font-semibold'>Filtrar por</h5>
                        <img src="/chevron-up.svg" alt="" className='h-3 w-3 ' />
                    </div>
                    <div className={`absolute w-auto bg-white left-0 z-10 top-full mt-2 rounded-md  shadow-[2px_8px_20px_rgba(0,0,0,0.2)] ${!isFilterOpen && 'hidden'}`}>
                        {filterArray.map((item, i) => (
                            <div key={i} className={`border-b border-[#D8D8D8] hover:bg-slate-100 cursor-pointer whitespace-nowrap py-4 px-6 ${filter === item.category && 'bg-slate-100'}`} onClick={() => handleFilter(item.category)}>{item.text}</div>
                        ))}
                    </div>
                </div>

                <div className='hidden lg:flex justify-between items-center'>
                    <h5 className='font-semibold'>Filtrar por</h5>
                    <div className='flex justify-between ml-12 space-x-8 '>
                        {filterArray.map((item, i) => (
                            <div key={i} className={`rounded-full py-2 px-5 cursor-pointer ${filter === item.category && 'bg-slate-100'}`} onClick={() => setfilter(item.category)}><p>{item.text}</p></div>
                        ))}
                    </div>
                </div>
                <div className='relative'>
                    <div className='cursor-pointer flex items-center space-x-2' onClick={() => setIsOrderOpen(!isOrderOpen)}>
                        <h5 className='font-semibold'>Ordernar por</h5>
                        <img src="/chevron-up.svg" alt="" className='h-3 w-3 ' />
                    </div>
                    <div className={`absolute w-auto bg-white right-0 top-full z-10 mt-2 rounded-md shadow-[2px_8px_20px_rgba(0,0,0,0.2)] ${!isOrderOpen && 'hidden'}`}>
                        {orderArray.map((item, i) => (
                            <div key={i} className={`border-b border-[#D8D8D8] hover:bg-slate-100 cursor-pointer whitespace-nowrap py-4 px-6 ${order === item.category && 'bg-slate-100'}`} onClick={() => handleOrder(item.category)}>{item.text}</div>
                        ))}
                    </div>
                </div>
            </div>
            {/*  */}
            <CarsGrid />


        </div>
    )
}
