import React from 'react'
import '../styles/Navigation.css'

const Navigation = () => {
  return (
    // header
    <header>
      {/* nav */}
      <nav>
        {/* left-nav */}
        <div className='left-nav'>
          {/* user-icon */}
          <ion-icon name="person-circle-outline" />
          {/* map-icon */}
          <i className="fa-solid fa-location-dot map-icon"></i>
          {/* table-text-&-number */}
          <h4>Table 1</h4>
        </div>
        {/* right-nav */}
        <div className="right-nav">
          {/* notification-container */}
          <div className="notification-container">
            {/* notification-icon */}
            <i className="fa-regular fa-bell notificatin-icon"></i>
            {/* notification-red-dote */}
            <div className="notification-red-dote"></div>
          </div>
          {/* menu-bar */}
          <i className="fa-solid fa-ellipsis-vertical menu-bar"></i>
        </div>
      </nav>
    </header>
  )
}

export default Navigation