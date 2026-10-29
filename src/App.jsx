import React from 'react'
import Svg from './components/Svg'
import Header from './components/Header'
import Footer from './components/Footer'
import GalleryRouter from './components/GalleryRouter'
import ThemeToggle from './components/ThemeToogle'
import ImageApi from './components/ImageApi'
import DonationThanks from './components/DonationThanks'


function App() {
  return (
        <>
          <Svg/>
          <Header/>
          <DonationThanks/>
          <main>
            <GalleryRouter/>
            <ImageApi/>
          </main>
          <Footer/>    
          <ThemeToggle/>  
        </>
  )
}

export default App
