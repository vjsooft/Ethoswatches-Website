import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/ethos-logo.svg';
import moment from 'moment';

export default function MiddelHeader() {
  // const today = new Date().format('Month-DD-YY');
  const today = moment(new Date()).format('LLLL');
  return (
    <div className='container'>
      <div className='row'>
        <div className='col p-0'>
          <Link to="/">
            <img src={logo} alt="logo" className='img-fluid custom-logo'/>
          </Link>
        </div>
        <div className='col p-0'>.
              <h3 className="get_current_date">{today.slice(0, 24)}</h3>
        </div>
        <div className='col d-flex align-items-center justify-content-end p-0'>
        <iframe id="rolex_retailer" title="Rolex Official Retailer" 
        style={{width:"150px",height:"70px"}}
src="https://static.rolex.com/retailers/clock/?colour=gold&amp;apiKey=49468296e17771d177ef6ef8416dcf42&amp;lang=en" 
scrolling="NO"></iframe>

        </div>
      </div>
    </div>
  )
}
