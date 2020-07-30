import React from 'react'

export default function CarList({cars, addToFavorites}){
  console.log(cars)
    const showCars = () => cars.map(car => (
        <li>
          <h2>{car.make}</h2>
          <h2>{car.model}</h2>
          <img
            src={car.image}
            onClick={() => addToFavorites(car)}
          />
        </li>
    ))

    return (
        <ul className="car-list">
            {showCars()}
        </ul>
    )
}
