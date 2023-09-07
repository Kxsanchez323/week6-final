import React from 'react'
import SearchBar from './SearchBar'


function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header__wrapper">
            <h1 className="section__title">
              View our <span className="Blue">Selection</span> 
            </h1>
             <SearchBar/> 
            <h2 className="section__subtitle">
              View your favourite movies, at your favorite
              <span className="Blue"> Place</span>!
            </h2>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header