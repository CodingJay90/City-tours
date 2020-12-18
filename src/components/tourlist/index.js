import React, {useState} from 'react'
import Tour from '../tour/Tour'
import './TourList.css'
import {TourData} from '../TourData'

const TourList = () => {
    const [tours, setTours] = useState(TourData)
    console.log(tours)

    const removeTour = id => {
        console.log(id)
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }

    return (
        <section className="tour-list">
            {tours.map(tour => {
                return (
                  <Tour key={tour.id} removeTour={removeTour} tour={tour} />
                );
            })}
        </section>
    )
}

export default TourList
