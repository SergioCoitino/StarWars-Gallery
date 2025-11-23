import React from 'react'
import Svg from './components/Svg'
import Header from './components/Header'
import Footer from './components/Footer'
import GalleryRouter from './components/GalleryRouter'
import ThemeToggle from './components/ThemeToogle'


function App() {
  return (

        <>
          <Svg/>
          <Header/>
          <GalleryRouter/>
          <Footer/>    
          <ThemeToggle/>  
        </>

  )
}

export default App
