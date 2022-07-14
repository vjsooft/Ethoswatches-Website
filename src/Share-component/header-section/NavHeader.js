import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function NavHeader() {
  return (
    <nav>
      <div className='container cus-nav'>
        <div className='row'>
          <div className='col'>
            <nav className="navbar navbar-expand-lg">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li><NavLink to="/brands">brands</NavLink></li>
                  <li><NavLink to="/rolex-watches">rolex</NavLink></li>
                  <li><NavLink to="/brands">Watch finder</NavLink></li>
                  <li><NavLink to="/brands">Pre-owned watches</NavLink></li>
                  <li><NavLink to="/accessories">Accessories</NavLink></li>
                  <li><NavLink to="/repair-and-service">Repair & Service</NavLink></li>
                  <li><NavLink to="/locatestore">Boutiques</NavLink></li>
                  <li><NavLink to="/the-watch-guide">The watch guide</NavLink></li>
                  <li><NavLink to="/special-offers">Special Offers</NavLink></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
    </div>
  </nav>
  )
}
