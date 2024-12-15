import React from 'react'
import Hero from '../components/Hero/Hero'
import NewListing from '../components/NewListing/NewListing'
import Help from '../components/Help/Help'
import HomeLoan from '../components/HomeLoan/HomeLoan'
import ListingCategories from '../components/ListingCategories/ListingCategories'
import Review from '../components/Review/Review'
import CTA from '../components/CTA/CTA'

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