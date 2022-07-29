import React, { useEffect, useState } from 'react'
import { filterer, orderer } from './filterer';
import SingleCar from './SingleCar';


const testArray=[
    {
      "id": 1,
      "name": "Corolla",
      "segment": "Sedan",
      "year": 2000,
      "price": 3817000,
      "thumbnail": "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-300.png",
      "photo": "http://challenge.agenciaego.tech/media/images/corolla_plata_metalico.width-600.png"
    },
    {
      "id": 2,
      "name": "Camry",
      "segment": "Sedan",
      "year": 2021,
      "price": 4250400,
      "thumbnail": "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-300.png",
      "photo": "http://challenge.agenciaego.tech/media/images/CAMRY-V6_LAT-Negro.width-600.png"
    },
    {
      "id": 3,
      "name": "Yaris Hatchback",
      "segment": "Hatchback",
      "year": 2020,
      "price": 2585000,
      "thumbnail": "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-300.png",
      "photo": "http://challenge.agenciaego.tech/media/images/YarisHB_Rojo_res.width-600.png"
    },
    {
      "id": 4,
      "name": "Etios",
      "segment": "Hatchback",
      "year": 1976,
      "price": 1731000,
      "thumbnail": "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-300.png",
      "photo": "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png"
    },
    {
      "id": 5,
      "name": "Hilux",
      "segment": "Pickups y Comerciales",
      "year": 1810,
      "price": 3410000,
      "thumbnail": "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-300.png",
      "photo": "http://challenge.agenciaego.tech/media/images/2021061900171062_PostTonemapHDRColor-03.width-600.png"
    },
    {
      "id": 6,
      "name": "Hiace Furgón",
      "segment": "Pickups y Comerciales",
      "year": 1980,
      "price": 3645200,
      "thumbnail": "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-300.png",
      "photo": "http://challenge.agenciaego.tech/media/images/HIAC1812-1002_LAT_BLANCO.width-600.png"
    },
    {
      "id": 7,
      "name": "Rav4",
      "segment": "SUVs",
      "year": 2001,
      "price": 2960500,
      "thumbnail": "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-300.png",
      "photo": "http://challenge.agenciaego.tech/media/images/RAV4_AWD_LIMITED__HV_LAT_azul_marino_mica_resi.width-600.png"
    },
    {
      "id": 8,
      "name": "SW4",
      "segment": "SUVs",
      "year": 2021,
      "price": 6892000,
      "thumbnail": "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-300.png",
      "photo": "http://challenge.agenciaego.tech/media/images/10-2020122300452140_090_PostTonemapHDRColor.width-600.png"
    }
  ]



export default function CarsGrid({ filter, order }) {

    const [cars, setCars] = useState(testArray)
    const [fullList, setFullList] = useState(testArray)

    
    // useEffect(() => {
    //     fetch('https://challenge.agenciaego.tech/api/models/')
    //         .then((res) => res.json())
    //         .then((cars) => {
    //             setCars(cars)
    //             setFullList(cars)
    //         });
    // }, [])

    useEffect(() => {
        if (filter === 'all') {
            setCars(fullList)
        } else {
            const filteredArray = filterer(fullList, filter)
            setCars(filteredArray)
        }
    }, [filter, fullList])

    useEffect(() => {
        // console.log('ordering by' + order)
        const ordered = orderer(cars, order)
        setCars(ordered)
    }, [order, fullList])

    // useEffect(() => {
    //     console.log(cars)
    // }, [cars])


    return (
        <div className='flex justify-evenly mt-16 mb-10 flex-wrap text-center gap-x-7'>
            {cars.map(car => <SingleCar key={car.id} {...car} />)}
        </div>
    )
}
