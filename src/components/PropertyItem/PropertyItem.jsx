import React from 'react'

function PropertyItem({proName,proLocation,proPrice,proRating}) {
  return (
      <div className='h-72 w-52 bg-gray400 px-2 py-2 border rounded-xl'>
          <div className='bg-white h-[70%] overflow-hidden rounded-lg'>
              <img src="https://i.pinimg.com/1200x/14/a3/30/14a330c962155e97622da9a81d41df67.jpg" alt="" />
          </div>
          <div className='px-2'>
              <h3 className='text-2xl text-slate-900'>Property 1</h3>
              <p className='text-gray-700 text-sm'>Ohio, US</p>
              <div className='flex justify-between '>
                  <h4 className='text-xl'>$350</h4>
                  <p className='text-xl'>4.5</p>
              </div>
          </div>
    </div>
  )
}

export default PropertyItem