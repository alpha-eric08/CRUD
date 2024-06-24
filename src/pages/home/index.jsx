import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

function Home() {
  return (
    <div>
        {/* Navbar */}
        <Navbar />
        {/* Outlet */}
        <Outlet/>
        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Home