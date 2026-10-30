import React from 'react'

function Footer() {
  return (
    <footer className="text-body-secondary py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">
          Developed by <a href="https://github.com/SergioCoitino" target="_blank" rel="noopener noreferrer">Sergio Coitiño</a> |{' '}
          <a href="https://sergio-coitino-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a> |{' '}
          <a href="https://www.linkedin.com/in/sergiocoitino/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        <p className="mb-2">
          Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from{' '}
          <a href="https://starwars.fandom.com/wiki/Main_Page" target="_blank" rel="noopener noreferrer">Wookieepedia</a> and data from{' '}
          <a href="https://swapi.dev/" target="_blank" rel="noopener noreferrer">SWAPI</a>.
        </p>
        <nav aria-label="Footer category links" className="small mb-2">
          <span>Categories: </span>
          <a href="/?category=Characters" className="me-2">Characters</a>
          <a href="/?category=Planets" className="me-2">Planets</a>
          <a href="/?category=Species" className="me-2">Species</a>
          <a href="/?category=Starships" className="me-2">Starships</a>
          <a href="/?category=Vehicles" className="me-2">Vehicles</a>
          <span className="me-2">|</span>
          <a href="/swapi-image-api/">SWAPI Images API</a>
        </nav>
        <p className="mb-0 small text-body-secondary">
          Featured in production: <a href="https://star-warsapp.netlify.app/" target="_blank" rel="noopener noreferrer">Star Wars App</a> (consumes this visual API for character, starship &amp; planet stats).
        </p>
      </div>
    </footer>
  )
}

export default Footer
