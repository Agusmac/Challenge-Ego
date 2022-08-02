import React, { useEffect, useState } from 'react'
import { filterer, orderer, } from './helpers/filterer';
import SingleCar from './SingleCar';
import { testArray } from './helpers/testArray';

export default function CarsGrid({ filter, order }) {

    // comment this out & uncomment the two lines below to test the order by year functionality

    // 
    const [cars, setCars] = useState([])
    const [fullList, setFullList] = useState([])

    useEffect(() => {
        fetch('https://challenge.agenciaego.tech/api/models/')
            .then((res) => res.json())
            .then((cars) => {
                setCars(cars)
                setFullList(cars)
            });
    }, [])
    // 

    // const [cars, setCars] = useState(testArray)
    // const [fullList, setFullList] = useState(testArray)


    useEffect(() => {
        let tempArray = fullList
        if (filter !== 'all') tempArray = filterer(fullList, filter);
        if (order !== 'default') tempArray = orderer(tempArray, order);

        setCars(tempArray)
    }, [order, filter, fullList])


    return (
        <div className='flex justify-evenly mt-16 mb-10 flex-wrap text-center gap-x-7'>
            {cars.map(car => <SingleCar key={car.id} {...car} />)}
        </div>
    )
}
