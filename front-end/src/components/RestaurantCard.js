import React from 'react'
import '../css/restaurantcard.css'

const RestaurantCard = ( { restaurant }) => {
  return (
    <>                  
        <div className='card-restaurant'>
            <img src={restaurant.image_url} alt={restaurant.name} />
                <div className='card-content-restaurant'>
                   <h2>{restaurant.name}</h2>
                    <div className="name-cuisine">
                        <p><i className="fa-solid fa-location-crosshairs"></i>{restaurant.location}</p>
                           <p><i className="fa-solid fa-utensils"></i>{restaurant.cuisine}</p>
                    </div>
                </div>
        </div>
      
    </>
  )
}

export default RestaurantCard