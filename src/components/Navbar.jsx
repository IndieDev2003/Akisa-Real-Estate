import React from 'react'

function Navbar() {
  return (
      <header className='flex items-center justify-between px-3 sm:px-20 h-[10vh]'>
          <h2 className='text-2xl'>Akisa Estate</h2>
          <div className='hidden md:flex gap-8'>
              <p>Home</p>
              <p>Explore</p>
              <p>Agency</p>
              <p>Blog</p>
              <p>About</p>
              <p>Contact</p>
          </div>
          <div>
              <button className='rounded-lg px-6 py-2 text-white bg-orange-600'>Add Listing</button>
          </div>
    </header>
  )
}

export default Navbar