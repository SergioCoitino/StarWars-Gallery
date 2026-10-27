import React, { useState, useEffect } from 'react';

const LIMITE_POR_PAGINA = 10;

function getResourceIdFromUrl(url) {
  const segments = url.split('/').filter(segment => segment);
  return segments.pop(); 
}

function ItemCard({ item, imageFolder, categoryTitle }) {
  const [errorCarga, setErrorCarga] = useState(false);

  const showPlaceholder = !item.imagen || errorCarga;

  useEffect(() => {
    setErrorCarga(false);
  }, [item.imagen, item.name, imageFolder]); 

  return (
    <div className="col">
      <article className="card h-100 album-card"> 
        {showPlaceholder ? (
          <div className="album-img d-flex align-items-center justify-content-center text-muted border" role="img" aria-label={`No image available for ${item.name}`}>
             [Not Available]
          </div>
        ) : (
          <img 
            src={item.imagen} 
            className="card-img-top album-img" 
            alt={`${item.name} — ${categoryTitle} | Star Wars Gallery`} 
            loading="lazy"
            decoding="async"
            onError={() => setErrorCarga(true)} 
          />
        )}

        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h3 className="card-title text-center h5">{item.name}</h3>
        </div>
      </article>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL DE LA GALERÍA ---
function CardGallery({ apiEndpoint, imageFolder, title }) {
  const [items, setItems] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setPagina(1);
    cargarItems(1); 
  }, [apiEndpoint, imageFolder]);

  useEffect(() => {
    if (pagina !== 1 || apiEndpoint.includes('page=1')) {
        cargarItems(pagina);
    }
  }, [pagina]);

  const cargarItems = async (pageNumber) => {
    setCargando(true);
    try {
      const response = await fetch(`${apiEndpoint}?page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Error loading data from SWAPI');
      }
      const data = await response.json();

      const totalItemsSWAPI = data.count; 
      const itemsAPI = data.results;

      const itemsConImagen = itemsAPI.map((item) => {
        const id = getResourceIdFromUrl(item.url); 
        return {
          id,
          name: item.name,
          imagen: `${imageFolder}${id}.jpg`
        };
      });
      
      setItems(itemsConImagen);
      setTotalPaginas(Math.ceil(totalItemsSWAPI / LIMITE_POR_PAGINA));

    } catch (error) {
      console.error("Error fetching data:", error);
      setItems([]); 
    } finally {
      setCargando(false);
    }
  };

  const handleAnterior = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const handleProximo = () => {
    if (pagina < totalPaginas) {
      setPagina(pagina + 1);
    }
  };

  return (
    <section className="container mt-5" aria-labelledby="gallery-category-heading">
      <h2 id="gallery-category-heading" className="text-center mb-4 h1">{title}</h2>
      
      {cargando && (
        <div className="text-center my-5" role="status" aria-live="polite">
          <div className="spinner-border text-primary">
            <span className="visually-hidden">Loading...</span> 
          </div>
          <p className="mt-2">Loading {title.toLowerCase()}...</p>
        </div>
      )}

      {!cargando && (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-3"> 
            {items.map((item) => (
              <ItemCard 
                key={item.id || item.name} 
                item={item} 
                imageFolder={imageFolder} 
                categoryTitle={title}
              /> 
            ))}
          </div>

          <nav className="d-flex justify-content-between align-items-center mt-4" aria-label={`${title} pagination`}>
            <button 
              className="btn btn-primary" 
              onClick={handleAnterior} 
              disabled={pagina === 1}
              aria-label={`Previous page of ${title}`}
            >
              Previous
            </button>
            <span aria-live="polite">Page {pagina} of {totalPaginas}</span>
            <button 
              className="btn btn-primary" 
              onClick={handleProximo} 
              disabled={pagina === totalPaginas}
              aria-label={`Next page of ${title}`}
            >
              Next
            </button>
          </nav>
        </>
      )}
    </section>
  );
}

export default CardGallery;
