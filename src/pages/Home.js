import React from 'react'
import ProductList from '../Share-component/ProductList'
import PorductCategory from '../Share-component/PorductCategory'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Home Slider Images
import SlideOne from '../assets/images/home-slide-1.jpg'
import SlideTwo from '../assets/images/home-slide-2.jpg'
import SlideThree from '../assets/images/home-slide-3.jpg'
import SlideFour from '../assets/images/home-slide-4.jpg'
import SlideFive from '../assets/images/home-slide-5.jpg'

// Home Featured Images
import FeaturOne from '../assets/images/feac-1.jpg'
import FeaturTwo from '../assets/images/feac-2.jpg'
import FeaturThree from '../assets/images/feac-3.jpg'
import FeaturFour from '../assets/images/feac-4.jpg'
import FeaturFive from '../assets/images/feac-5.jpg'
import FeaturSix from '../assets/images/feac-6.jpg'
// Home Featured Images
import BRANDS from '../assets/images/partners.jpg'




export default function Home() {
  const slideItem = [
    {imgPath:SlideOne, alt:'slider img', title:'slider imag'},
    {imgPath:SlideTwo, alt:'slider img', title:'slider imag'},
    {imgPath:SlideThree, alt:'slider img', title:'slider imag', dis:'The H. Moser & Cie. Endeavour Tourbillon Concept Tiger’s Eye', shortDis:'Unique Stone Dials; Limited Edition', btn:'Discover Now'},
    {imgPath:SlideFour, alt:'slider img', title:'slider imag', dis:"Louis Moinet’s Cosmic Art Moon ‘Tiffany’ Blue Edition", shortDis:'The Latest Of The Moon And Mars Watches', btn:'Discover Now'},
    {imgPath:SlideFive, alt:'slider img', title:'slider imag', dis:"The Oris Big Crown Pointer Date Cervo Volante Edition", shortDis:'Straps Made From Responsibly-Sourced Leather', btn:'Discover Now'},
  ]
  const productFeatured = [
    {imgPath:FeaturOne, alt:'slider img', title:'slider imag', braName:"Carl F. Bucherer", collName:'Manero', price:'6,42,600'}, 
    {imgPath:FeaturTwo, alt:'slider img', title:'slider imag', braName:"Carl F. Bucherer", collName:'Manero', price:'6,42,600'}, 
    {imgPath:FeaturThree, alt:'slider img', title:'slider imag', braName:"Carl F. Bucherer", collName:'Manero', price:'6,42,600'}, 
    {imgPath:FeaturFour, alt:'slider img', title:'slider imag', braName:"Carl F. Bucherer", collName:'Manero', price:'6,42,600'}, 
    {imgPath:FeaturFive, alt:'slider img', title:'slider imag', braName:"Carl F. Bucherer", collName:'Manero', price:'6,42,600'}, 
    {imgPath:FeaturSix, alt:'slider img', title:'slider imag', braName:"Carl F. Bucherer", collName:'Manero', price:'6,42,600'}
  ]
  return (
    <>
        {/* Home Banner Code Here Start */}
      <section className='cusBanner'>
        <div className="container">
        <div className='row'>
            <div className='col p-0'>
              <OwlCarousel className='owl-theme cus-ban-slide' loop margin={10} nav={false} items={1}>
                  {
                    slideItem.map((item, index)=>
                      <div key={index} className="position-relative">
                        <img src={item.imgPath} alt={item.alt} title={item.title}/>
                        <div className='banner-content'>
                          <h1>{item.dis}</h1>
                          <p>{item.shortDis}</p>
                          <a href="" className='btn banner-btn'>{item.btn}</a>
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
              productFeatured.map((item, index)=>
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
