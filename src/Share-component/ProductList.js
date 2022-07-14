import React from 'react'
import CatOne from '../assets/images/category-1.jpg'
import CatTwo from '../assets/images/category-2.jpg'
import CatThree from '../assets/images/category-3.jpg'
import CatFour from '../assets/images/category-4.jpg'

import PickOne from '../assets/images/pick-1.jpg'
import PickTwo from '../assets/images/pick-2.jpg'
import PickThree from '../assets/images/pick-3.jpg'
import PickFour from '../assets/images/pick-4.jpg'

export default function ProductList(props) {
  const CATEGORY = [
    {imgPath:CatOne, alt:'slider img', title:'slider imag', catOff:'Special Offers', btn:'shop now'},
    {imgPath:CatTwo, alt:'slider img', title:'slider imag', catOff:'Watches for Men', btn:'shop now'},
    {imgPath:CatThree, alt:'slider img', title:'slider imag', catOff:'Watches for Women', btn:'shop now'},
    {imgPath:CatFour, alt:'slider img', title:'slider imag', catOff:'Accessories', btn:'shop now'},
  ]

  const PICKS = [
    {imgPath:PickOne, alt:'slider img', title:'slider imag', catOff:'California Dreamin’—Presenting Armin Strom’s Elegant Tribute 1 California Timepieces', btn:'shop now'},
    {imgPath:PickTwo, alt:'slider img', title:'slider imag', catOff:'Oris’s Big Crown ProPilot X Calibre 400: The Essential Addition And A True Crowd-Pleaser', btn:'shop now'},
    {imgPath:PickThree, alt:'slider img', title:'slider imag', catOff:'Seize The Week With The New MeisterSinger Astroscope', btn:'shop now'},
    {imgPath:PickFour, alt:'slider img', title:'slider imag', catOff:'Eco-Friendly Pursuits: Introducing Baume & Mercier’s Contemporary Baume Collection', btn:'shop now'},
  ]
  return (
      <>
        <div className='col-sm-12'><h2 className="text-uppercase">{props.productTit}</h2></div>
        {
          props.categ == 'CATEGORY' ?
          CATEGORY.map((item, index)=> 
          <div className='col-sm-3 position-relative' key={index}>
            <img src={item.imgPath} alt={item.alt} title={item.title} className="img-fluid"/>
            <div className='product-content'>
              <h3>{item.catOff}</h3>
              <a href="" className='btn banner-btn'>{item.btn}</a>
            </div>
          </div>
          )
        : 
        PICKS.map((item, index)=>
          <div className='col-sm-3 position-relative' key={index}>
            <img src={item.imgPath} alt={item.alt} title={item.title} className="img-fluid"/>
            <div className='product-content'>
              <h3>{item.catOff}</h3>
              <a href="" className='btn banner-btn'>{item.btn}</a>
            </div>
          </div>
          )
        
      }
      </>
  )
}
