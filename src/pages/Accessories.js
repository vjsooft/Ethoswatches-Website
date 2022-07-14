import React from 'react'
import Banner from '../Share-component/Banner'
import BannerBG from '../assets/images/assec.jpg'

export default function Accessories() {
  return (
    <div className='mb-4'>
      <Banner title="Accessories Page" bg={BannerBG}/>
      <div className='text-center'>Accessories</div>
    </div>
  )
}
