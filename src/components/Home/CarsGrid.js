import React, { useEffect, useState } from 'react'
import SingleCar from './SingleCar';



export default function CarsGrid() {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('https://challenge.agenciaego.tech/api/models/')
            .then((res) => res.json())
            .then((cars) => setCars(cars));
    }, [])

    // useEffect(() => {
    //     console.log(cars)

    // }, [cars])

    // real one

    // test both please!!

    // return (
    //     <div className='flex justify-evenly mt-16 mb-10 flex-wrap text-center gap-x-7'>
    //         {cars.map(car => (
    //             <div key={car.id} className='sm:w-screen md:w-[300px] flex flex-col '>
    //                 <div className='relative md:-mb-10'>
    //                     <h3 className='text-3xl font-semibold mb-2'>{car.name}</h3>
    //                     <p>{`${car.year} | $ ${car.price}`}</p>
    //                 </div>
    //                 <div className='my-auto flex justify-center '>
    //                     <img src={car.thumbnail} alt={car.name} />
    //                 </div>
    //             </div>))}

    //     </div>
    // )

    // test one
    return (
        <div className='flex justify-evenly mt-16 mb-10 flex-wrap text-center gap-x-7'>
            {cars.map(car => <SingleCar key={car.id} car={car}></SingleCar>)}
        </div>
    )


}
