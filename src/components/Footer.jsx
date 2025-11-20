import React from 'react'

function Footer() {
  return (
    <footer className="text-body-secondary py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-0">Developed by <a href="https://github.com/SergioCoitino" target="_blank" rel="noopener noreferrer">Sergio Coitiño</a></p>
        <p className="mb-1">Star Wars and all associated names and/or images are copyright Lucasfilm Ltd. Images were freely collected from <a href="https://starwars.fandom.com/wiki/Main_Page" target="_blank" rel="noopener noreferrer">Wookiepedia</a></p>
      </div>
    </footer>
  )
}

export default Footer