import React from 'react'
import CATEGORY from '../Dummy-json/ProductCategory.json'
import PICKS from '../Dummy-json/ProductPicks.json'

export default function ProductList(props) {
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
