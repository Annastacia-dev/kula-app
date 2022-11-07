import React from 'react'
import { useParams } from 'react-router-dom'
import { makeRatingStars } from '../utils'
import '../css/restaurant.css'

const Restaurant = ( { restaurants }) => {

  const params = useParams()

  return (
    <>
     {
        restaurants.map(restaurant => (
          restaurant.id === parseInt(params.id) &&
          <> 
          <div className='container' key={restaurant.id} >
          <div className="card restaurant-item">
            <img src={restaurant.image_url} alt={restaurant.name} />
            <div className='restaurant-card-content'>
              <h1>{restaurant.name}</h1>
              <div className='item-name-cuisine'>
                <p><i className="fa-solid fa-location-crosshairs"></i>{restaurant.location}</p>
                <p><i className="fa-solid fa-utensils"></i>{restaurant.cuisine}</p>
              </div>
              
            </div>
            <div className='restaurant-item-reviews'>
              <div className='review-buttons'>
                <button
                >
                  {/* Review */}
                  <i className="fa-solid fa-star"></i>
                  Add Review
                </button>
                <button>
                 {/* Direction */}
                  <i className="fa-solid fa-directions"></i>
                  Get Directions
                </button>
                {/* Bookmark */}
                <button>
                  <i className="fa-solid fa-bookmark"></i>
                  Bookmark
                </button>
                {/* Share */}
                <button>
                  <i className="fa-solid fa-share"></i>
                  Share
                </button>
              </div>

              {
                restaurant.reviews.map(review => (
                  <div key={review.id} className='review'>
                    <p>
                      <span>
                        <i className="fa-solid fa-star"></i>
                        {
                        makeRatingStars(review.rating)
                        }
                      </span>
                      <p>
                      {review.content}
                        </p> 
                      </p>
                    
                  </div>
                ))
              }
             
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

