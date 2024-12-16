import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import NewListing from '../components/Home/NewListing/NewListing'
import Help from '../components/Home/Help/Help'
import HomeLoan from '../components/Home/HomeLoan/HomeLoan'
import ListingCategories from '../components/Home/ListingCategories/ListingCategories'
import Review from '../components/Home/Review/Review'
import CTA from '../components/Home/CTA/CTA'

function Home() {
  return (
      <div className='overflow-x-hidden'>
      <Hero />
      <NewListing />
      <Help />
      <HomeLoan />
      <ListingCategories />
      <Review />
      <CTA/>
      {/* <div className='h-screen'></div> */}
    </div>
  )
}

export default Home