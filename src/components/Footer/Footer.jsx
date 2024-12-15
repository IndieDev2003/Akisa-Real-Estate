import React from 'react'

function Footer() {
  return (
    <div className='min-h-[50vh] w-full bg-blue-950 text-white'>
      <div className='w-full flex items-center justify-center py-10'>
        <h2 className='text-3xl'>Akisa Real Estate</h2>
      </div>
      <div className="grid  md:grid-cols-4 items-start w-full gap-5 md:justify-items-center px-10 mb-5">
        <div>
          <h2 className='text-2xl'>Make Your Home More Modern</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum odit perferendis.</p>
        </div>
        <ul>
          <li className='text-2xl'>Our Services</li>
          <li>Home Rent</li>
          <li>Apratment Sale</li>
          <li>Villa Rent</li>
        </ul>
        <ul>
          <li className='text-2xl'>Support</li>
          <li>Customer Services</li>
          <li>Email Us</li>
          <li>Privacy Policy</li>
        </ul>
        <ul>
          <li  className='text-2xl'>Social Media</li>
          <li>Facebook</li>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <hr />
      <div>
        <p className='text-center text-sm flex items-center w-full justify-center py-5'>2022 Akisa Real Estate. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer