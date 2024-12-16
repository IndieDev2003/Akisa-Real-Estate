import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Explore from './pages/Explore'
import { Route, Routes } from 'react-router-dom'
import Agency from './pages/Agency'

function App() {
  return (
    <div className='outfit'>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/explore' element={<Explore />} />
        <Route  path='/agency' element={<Agency />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App