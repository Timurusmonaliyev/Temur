import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Cart from './Cart'
import Team from './Team'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='bg-white'>
      <Header />
      <Banner />
      <Cart />
      <Team />
      <Footer />
    </div>
  )
}

export default Home