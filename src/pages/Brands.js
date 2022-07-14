import React from 'react'
import Banner from '../Share-component/Banner'
import BannerBG from '../assets/images/brand.jpg'


export default function Brands() {
  return (
    <div className='mb-4'>
      <Banner title="Brands Page"  bg={BannerBG}/>
      <div className='text-center'>Brands</div>
    </div>
  )
}
