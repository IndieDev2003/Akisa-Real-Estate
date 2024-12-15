import React from 'react'
import Hero from '../components/Hero/Hero'
import NewListing from '../components/NewListing/NewListing'
import Help from '../components/Help/Help'
import HomeLoan from '../components/HomeLoan/HomeLoan'

function Home() {
  return (
      <div className='overflow-x-hidden'>
      <Hero />
      <NewListing />
      <Help />
      <HomeLoan/>
      <div className='h-screen'></div>
    </div>
  )
}

export default Home