import React from 'react'
import Topheader from '../Share-component/header-section//TopHeader'
import MiddelHeader from '../Share-component/header-section//MiddelHeader'
import NavHeader from '../Share-component/header-section/NavHeader'
export default function Header() {
  return (
    <>
        <div className='cus-top-header'><Topheader/></div>
        <MiddelHeader/>
        <NavHeader/>
    </>
  )
}
