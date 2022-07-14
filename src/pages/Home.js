import React from 'react'
import ProductList from '../Share-component/ProductList'
import PorductCategory from '../Share-component/PorductCategory'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// Home Slider JSON
import HomeSlider from '../Dummy-json/HomeSlider.json'
// Home Featured JSON
import ProductFeatured from '../Dummy-json/ProductFeatured.json'
// Home Featured Images
import BRANDS from '../assets/images/partners.jpg'

export default function Home() {
  return (
    <>
        {/* Home Banner Code Here Start */}
      <section className='cusBanner'>
        <div className="container">
        <div className='row'>
            <div className='col p-0'>
              <OwlCarousel className='owl-theme cus-ban-slide' loop margin={10} nav={false} items={1}>
                  {
                    HomeSlider.map((item, index)=>
                      <div key={index} className="position-relative">
                        <img src={item.imgPath} alt={item.alt} title={item.title}/>
                        <div className='banner-content'>
                          <h1>{item?.dis}</h1>
                          <p>{item?.shortDis}</p>
                          <a href="" className='btn banner-btn'>{item?.btn}</a>
                        </div>
                      </div>
                    )
                  }
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
      
      {/* Home Product Category Code Here Start */}
      <section className='cusCategory b-with-m-p'>
        <div className="container">
        <div className='row'>
          <ProductList productTit="SHOP BY CATEGORY" categ="CATEGORY"/>
        </div>
        </div>
      </section>

      {/* Home Product Featured Code Here Start  */}
      <section className='cusFeatured b-with-m-p'>
        <div className="container">
          <div className='row'>
            <div className='col-sm-12'><h2 className="text-uppercase">FEATURED WATCHES</h2></div>
            {
              ProductFeatured.map((item, index)=>
              <div className='col-sm-2 position-relative'  key={index}>
              <img src={item.imgPath} alt={item.alt} title={item.title} className="img-fluid"/>
              <div className='product_sortDesc text-center'>
              <p>{item.braName}</p>
              <span className='pro_collection_name'>{item.collName}</span>
              <p className='pro_price'>₹ {item.price}</p>
              </div>
              </div>    
              )
            }
          </div>
        </div>
      </section>

      {/* Home Brands List Code Here Start  */}
      <section className='cusBrandsList b-with-m-p'>
        <div className="container">
          <div className='row'>
            <div className='col-sm-12'><h2 className="text-uppercase">AUTHORISED RETAILER FOR 60+ BRANDS</h2></div>
            <img src={BRANDS} className="img-fluid" alt="Brands" title='Brands'/>
          </div>
        </div>
      </section>

      {/* Home PICKS Code Here Start  */}
      <section className='cusPicks b-with-m-p'>
        <div className="container">
          <div className='row'>
            <ProductList productTit="EDITOR’S PICKS" categ="PICKS"/>
          </div>
        </div>
      </section>

      {/* Home Product Category Code Here Start */}
      <section className='cusProductCategory b-with-m-p pb-5'>
        <div className="container">
          <div className='row'>
            <div className="col">
              <PorductCategory/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
