import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RestaurantCard from './RestaurantCard'
import Footer from './Footer'
import '../css/restaurants.css'

const Restaurants = ( { restaurants }) => {

  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [cuisine, setCuisine] = useState('')

  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  // Filter restaurants by selected location

  const handleLocationChange = (e) => {
    e.preventDefault()
    setLocation(e.target.value)
  }

  // Filter restaurants by selected cuisine

  const handleCuisineChange = (e) => {
    e.preventDefault()
    setCuisine(e.target.value)
  }

  const filteredRestaurants = restaurants.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <>
      {/* <NavBar /> */}
      <div className='restaurant-search-bar'>

               <div className='search'>
                <input 
                type="text" 
                placeholder="Search for restaurant"
                value={search}
                onChange={handleSearchChange}
                 />
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                {/* Dropdown to filter restaurants by location, cuisine */}

                <div className='filter'>

                <select 
                name="location" 
                id="location"
                value={location}
                onChange={handleLocationChange}
                >
                    <option defaultValue="location" >Location</option>
                    <option value="kilimani">Kilimani</option>
                    <option value="karen">Karen</option>
                    <option value="westlands">Westlands</option>
                    <option value="lavinton">Lavington</option>
                    <option value="lenana">Lenana</option>
                    <option value="gigiri">Gigiri</option>
                    <option value="villagemarket">Village Market</option>
                    <option value="hurlingham">Hurlingham</option>
                </select>

                <select 
                name="cuisine" 
                id="cuisine"
                value={cuisine}
                onChange={handleCuisineChange}
                >
                    <option defaultValue="cuisine" >Cuisine</option>
                    <option value="american">American</option>
                    <option value="asian">Asian</option>
                    <option value="mexican">Mexican</option>
                    <option value="italian">Italian</option>
                    <option value="french">French</option>
                    <option value="mediterranean">Mediterranean</option>
                    <option value="indian">Indian</option>
                    <option value="thai">Thai</option>
                    <option value="japanese">Japanese</option>
                    <option value="korean">Korean</option>
                    <option value="vietnamese">Vietnamese</option>
                    <option value="spanish">Spanish</option>
                    <option value="greek">Greek</option>
                    <option value="middle eastern">Middle Eastern</option>
                    <option value="caribbean">Caribbean</option>
                    <option value="african">African</option>
                </select>

                </div>
               
              </div>
              <p className='description'>
              From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Kula covers it all.
              <br /> Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.
              </p>
      <div className="restaurants">
    {
      filteredRestaurants.map(restaurant => (
        <Link key={restaurant.id} className='restaurant-card' to={`/restaurants/${restaurant.id}`} >
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        </Link>
      ))
    }
    </div>
    <Footer />
    </>
  )
}

export default Restaurants