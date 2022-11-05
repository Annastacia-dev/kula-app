import React from 'react'
import NavBar from './NavBar'
import '../css/publichomepage.css'

const PublicHomePage = () => {
  return (
    <>
    <NavBar />
    <div className="public-home-page">
        <header className='phg-header'>
          <div className="content">
            <h1>Discover the best restaurants, cafés, and bars in your area</h1>
            <div className='page'>
              <h1> Restaurants</h1>
              <h1>Cafe's</h1>
              <h1>Bar's</h1>
              
            </div>
          </div>
          
        </header>
    </div>
    </>
  )
}

export default PublicHomePage