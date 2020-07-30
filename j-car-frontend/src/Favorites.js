import React from 'react'

export default function Favorites({favorites}){

    const showCars = () => favorites.map(car => (
        <li>
          <h2>{car.make}</h2>
          <h2>{car.model}</h2>
          <img src={car.image}/>
        </li>
    ))

    return (
        <ul className='favorites-list'>
            {showCars()}
        </ul>
    )
}
