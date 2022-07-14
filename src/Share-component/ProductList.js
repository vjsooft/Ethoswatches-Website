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
          <div className='col-sm-3' key={index}>
            <a href='' className='cus-card-overlay'>
              <img src={item.imgPath} alt={item.alt} title={item.title} className="img-fluid cus-img-animate"/>
              <div className='product-content'>
                <h3>{item.catOff}</h3>
                <span className='btn cus-shopNow'>{item.btn}</span>
              </div>
            </a>
          </div>
          )
        : 
        PICKS.map((item, index)=>
          <div className='col-sm-3' key={index}>
            <a href='' className='cus-card-overlay'>
              <img src={item.imgPath} alt={item.alt} title={item.title} className="img-fluid cus-img-animate"/>
              <div className='product-content'>
                <h3>{item.catOff}</h3>
                <span className='btn cus-shopNow'>{item.btn}</span>
              </div>
            </a>
          </div>
          )
        
      }
      </>
  )
}
