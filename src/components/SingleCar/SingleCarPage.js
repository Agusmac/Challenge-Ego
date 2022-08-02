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

    // useEffect(() => {
    //     console.log(carData)
    
    // }, [carData])


    if (loading) return <div role=""></div>


    return (
        <div className='w-full mx-auto'>
            <Hero {...carData} />
            <Carousel {...carData}/>
            <div className='max-w-screen-2xl mx-auto px-8 my-20'>
                    <CarContent content={carData.model_highlights[0]} />
                    <CarContent content={carData.model_highlights[1]} reverse />
            </div>
            <Footer />
        </div>
    )
}





// {
//     "id": 4,
//     "name": "Etios",
//     "segment": "Hatchback",
//     "year": 2021,
//     "price": 1731000,
//     "thumbnail": "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-300.png",
//     "photo": "http://challenge.agenciaego.tech/media/images/709000-1619455628_320.width-600.png",
//     "title": "Tu primer Toyota, mejor que nunca",
//     "description": "<p data-block-key=\"ko3j6\">Subite a la experiencia Toyota de la mano del Etios</p>",
//     "model_features": [
//       {
//         "name": "Espejos exteriores con luz de giro incorporada y regulacion electrica",
//         "description": "Disponible en versiones XLS",
//         "image": "http://challenge.agenciaego.tech/media/images/ODcGapc4KH.width-270.jpg"
//       },
//       {
//         "name": "Guantera con refrigeración",
//         "description": "Hasta 16 grados",
//         "image": "http://challenge.agenciaego.tech/media/images/Ro7VybbmBI.width-270.jpg"
//       }
//     ],
//     "model_highlights": [
//       {
//         "title": "Seguridad",
//         "content": "<p data-block-key=\"wblx6\">Etios incorpora control de estabilidad (VSC) y control de tracción (TRC) en todas sus versiones, que aportan tranquilidad y seguridad a todos los pasajeros.</p>",
//         "image": "http://challenge.agenciaego.tech/media/images/GINndapLdB.width-560.jpg"
//       },
//       {
//         "title": "Diseño exterior",
//         "content": "<p data-block-key=\"wblx6\">La versión XLS ofrece llantas de aleación diamantadas y faros oscurecidos que le dan una impronta más agresiva y robusta.</p>",
//         "image": "http://challenge.agenciaego.tech/media/images/yP5E513VCZ.width-560.jpg"
//       }
//     ]
//   }