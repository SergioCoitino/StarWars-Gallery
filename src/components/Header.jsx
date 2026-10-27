import React from 'react'

function Header() {
  return (
        <header data-bs-theme="dark">
          <div className="collapse text-bg-dark" id="navbarHeader">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h2 className="h4">About the Star Wars Gallery</h2>
                  <p className="text-body-secondary">
                    This interactive React application connects real-time data from the public SWAPI (The Star Wars API) with high-definition visual assets of characters, planets, species, starships, and vehicles.
                  </p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h2 className="h4">About the Author</h2>
                  <ul className="list-unstyled">
                    <li><a href="https://github.com/SergioCoitino" target="_blank" rel="noopener noreferrer" className="text-white">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/sergiocoitino/" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a></li>
                    <li><a href="https://sergio-coitino-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white">Portfolio</a></li>
                    <li><a href="https://swapi.dev/documentation" target="_blank" rel="noopener noreferrer" className="text-white">Check out SWAPI</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <a href="/" className="navbar-brand d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                <strong>Star Wars Gallery</strong>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>
  )
}

export default Header
