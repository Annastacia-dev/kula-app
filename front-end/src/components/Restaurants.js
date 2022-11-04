import React from 'react'
import RestaurantCard from './RestaurantCard'
import '../css/restaurants.css'

const Restaurants = ( { restaurants }) => {
  
  return (
    <>
      <div className="restaurants">
    {
      restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))
    }
    </div>
    </>
  )
}

export default Restaurants