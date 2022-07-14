import React from 'react'
import TopFooter from './footer-section/TopFooter'
import MiddelFooter from './footer-section/MiddelFooter'
import BottomFooter from './footer-section/BottomFooter'

export default function Footer() {
  return (
    <>
    <div className='cus-top-footer'><TopFooter/></div>
    <div className='cus-middel-footer'><MiddelFooter/></div>
    <div className='cus-bottom-footer'><BottomFooter/></div>
</>
  )
}
