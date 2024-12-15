import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='outfit'>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  )
}

export default App