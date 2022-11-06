import React from 'react'
import { useParams } from 'react-router-dom'
import '../css/restaurant.css'

const Restaurant = ( { restaurants }) => {

  const params = useParams()
  console.log(restaurants)

  

  return (
    <>
     {
        restaurants.map(restaurant => (
          restaurant.id === parseInt(params.id) &&
          <> 
          <div className='container'>
          <div key={restaurant.id} className="card restaurant-item">
            <img src={restaurant.image_url} alt={restaurant.name} />
            <div className='restaurant-card-content'>
              <h1>{restaurant.name}</h1>
              <div className='item-name-cuisine'>
                <p><i className="fa-solid fa-location-crosshairs"></i>{restaurant.location}</p>
                <p><i className="fa-solid fa-utensils"></i>{restaurant.cuisine}</p>
              </div>
              
            </div>
            <div className='restaurant-item-content'>
              <p>{restaurant.location}</p>

            </div>
           
            </div>

            </div>

            </>
        ))
     }
    </>
  )
}

export default Restaurant

