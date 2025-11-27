import React from 'react';
import { APP_TEXT, RESOURCE_KEYS } from './strings'; 

function Text({ onResourceChange, activeResource }) {
  
  const text = APP_TEXT; 
  
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-8 col-md-10 mx-auto"> 
            
            {/* Título */}
            <h1 className="fw-light">{text.title}</h1>
            
            {/* Descripción */}
            <p className="lead text-body-secondary">
              {text.description1}
            </p>
            
            <p className="mt-4">
              {RESOURCE_KEYS.map((resource) => (
                  <button
                      key={resource}
                      onClick={() => onResourceChange(resource)}
                      className={`btn my-2 mx-1 ${activeResource === resource ? 'btn-primary' : 'btn-secondary'}`}
                  >
                      {resource}
                  </button>
              ))}
            </p>
            
            {/* 2. BOTONES DE ENLACES EXTERNOS */}
            <p className="mt-4">
              <a 
                href="https://github.com/SergioCoitino" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary my-2 mx-1"
              >
                {text.githubButton}
              </a>
              
              <a 
                href="https://charactersstar-wars.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary my-2 mx-1"
              >
                {text.projectButton}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Text;