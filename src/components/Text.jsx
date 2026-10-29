import React from 'react';
import { APP_TEXT, RESOURCE_KEYS, PAYPAL_DONATE_URL } from './strings'; 

function Text({ onResourceChange, activeResource }) {
  
  const text = APP_TEXT; 
  
  return (
    <section className="py-5 text-center container" aria-label="Gallery Introduction and Category Filter">
      <div className="row py-lg-5">
        <div className="col-lg-8 col-md-10 mx-auto"> 
          
          {/* Título Principal (Único H1 da página) */}
          <h1 className="fw-light">{text.title}</h1>
          
          {/* Descripción */}
          <p className="lead text-body-secondary">
            {text.description1}
          </p>
          
          <nav className="mt-4" aria-label="Star Wars Resource Categories">
            {RESOURCE_KEYS.map((resource) => (
                <button
                    key={resource}
                    type="button"
                    onClick={() => onResourceChange(resource)}
                    aria-pressed={activeResource === resource}
                    className={`btn my-2 mx-1 ${activeResource === resource ? 'btn-primary' : 'btn-secondary'}`}
                >
                    {resource}
                </button>
            ))}
          </nav>
          
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
              href="https://star-warsapp.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary my-2 mx-1"
            >
              {text.projectButton}
            </a>

            <a 
              href={PAYPAL_DONATE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-warning my-2 mx-1"
            >
              <i className="bi bi-paypal me-1" aria-hidden="true"></i>
              {text.donateButton}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Text;
