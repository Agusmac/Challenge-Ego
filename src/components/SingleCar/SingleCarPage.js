import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Footer from '../Footer';
import CarContent from './CarContent';
import Carousel from './Carousel';
import Hero from './Hero';

export default function SingleCarPage({ setIsHome }) {

    const { id } = useParams()

    const [carData, setCarData] = useState('')
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setIsHome(false)
        fetch('https://challenge.agenciaego.tech/api/models/' + id)
            .then((res) => res.json())
            .then((cars) => {
                setCarData(cars)
                setLoading(false)
            })
    }, [])

    if (loading) return <div role=""></div>

    return (
        <div className='w-full mx-auto'>
            <Hero {...carData} />
            <Carousel />
            <div className='max-w-screen-2xl mx-auto px-8 my-20'>
                    <CarContent content={carData.model_highlights[0]} />
                    <CarContent content={carData.model_highlights[1]} reverse />
            </div>
            <Footer />
        </div>
    )
}

   // i removed the props on the carousel to use invented data
