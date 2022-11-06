import React from 'react'
import { Link } from 'react-router-dom'

const RestaurantCard = ( { restaurant }) => {

  console.log(restaurant)
  return (
    <>
      <Link key={restaurant.id} to='/login'>
                         
        <div className='card'>
            <img src={restaurant.image_url} alt={restaurant.name} />
                <div className='card-content'>
                   <h2>{restaurant.name}</h2>
                    <div className="name-cuisine">
                        <p><i className="fa-solid fa-location-crosshairs"></i>{restaurant.location}</p>
                           <p><i className="fa-solid fa-utensils"></i>{restaurant.cuisine}</p>
                    </div>
                </div>
        </div>
      </Link>
    </>
  )
}

export default RestaurantCard