import React from 'react'
import { NavLink } from 'react-router-dom'
// Nav JSON
import Navigation from '../../Dummy-json/Nav.json'
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
                  {
                    Navigation.map((navbar, index)=>
                    <li><NavLink to={navbar.path}>{navbar.linkName}</NavLink></li>
                    )
                  }
                </ul>
              </div>
            </nav>
          </div>
        </div>
    </div>
  </nav>
  )
}
