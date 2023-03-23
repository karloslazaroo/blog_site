import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import './mainlayout.css'
function MainLayout({children}) {
  return (
    

    <div>
        <Navbar/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default MainLayout