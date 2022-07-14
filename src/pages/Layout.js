import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Share-component/Header'
import Footer from '../Share-component/Footer'

export default function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
