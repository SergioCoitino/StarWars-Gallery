import React, { useState, useEffect } from 'react';

const LIMITE_POR_PAGINA = 10;

// --- FUNCIÓN DE UTILIDAD: Obtiene el ID numérico de la URL de la SWAPI ---
function getResourceIdFromUrl(url) {
  // Función genérica que funciona para 'people', 'starships', etc.
  const segments = url.split('/').filter(segment => segment);
  return segments.pop(); 
}

// --- COMPONENTE DE TARJETA (ItemCard) ---
function ItemCard({ item, imageFolder }) {
  const [errorCarga, setErrorCarga] = useState(false);

  // Determina si se debe mostrar la imagen o el placeholder
  const showPlaceholder = !item.imagen || errorCarga;

  useEffect(() => {
    setErrorCarga(false);
  }, [item.imagen, item.name, imageFolder]); 

  return (
    <div className="col">
      <div className="card h-100 album-card"> 
        
        {/* Renderizado de la Imagen o Placeholder (en inglés) */}
        {showPlaceholder ? (
          <div className="album-img d-flex align-items-center justify-content-center text-muted border">
             {item.imagen ? '[No Image]' : '[Not Available]'} 
          </div>
        ) : (
          <img 
            src={item.imagen} 
            className="card-img-top album-img" 
            alt={`Image of ${item.name}`} 
            onError={() => setErrorCarga(true)} 
          />
        )}

        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 className="card-title text-center">{item.name}</h5>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL DE LA GALERÍA ---
function CardGallery({ apiEndpoint, imageFolder, title }) {
  const [items, setItems] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [cargando, setCargando] = useState(true);

  // --- FUNCIÓN DE UTILIDAD: Verifica la existencia de la imagen ---
  async function verificarImagenExistente(id) {
    // Usa la prop imageFolder
    const url = `${imageFolder}${id}.jpg`; 
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok; 
    } catch (error) {
      return false;
    }
  }

  // Se ejecuta al cambiar el apiEndpoint (cambio de recurso)
  useEffect(() => {
    // Reinicia la página a 1 cada vez que se cambia de recurso (Ej. People -> Starships)
    setPagina(1);
    cargarItems(1); 
  }, [apiEndpoint, imageFolder]); // Depende del recurso activo

  // Se ejecuta al cambiar de página
  useEffect(() => {
    // Solo carga si la página no es 1 (ya cargada por el useEffect anterior)
    if (pagina !== 1 || apiEndpoint.includes('page=1')) {
        cargarItems(pagina);
    }
  }, [pagina]);

  const cargarItems = async (pageNumber) => {
    setCargando(true);
    try {
      // Usa la prop apiEndpoint
      const response = await fetch(`${apiEndpoint}?page=${pageNumber}`);
      if (!response.ok) {
        throw new Error('Error al load data');
      }
      const data = await response.json();

      const totalItemsSWAPI = data.count; 
      const itemsAPI = data.results;

      const itemsConImagenPromesas = itemsAPI.map(async (item) => {
        const id = getResourceIdFromUrl(item.url); 
        const imagenExiste = await verificarImagenExistente(id);

        if (imagenExiste) {
          return {
            name: item.name,
            imagen: `${imageFolder}${id}.jpg`
          };
        } else {
          return {
            name: item.name,
            imagen: null 
          };
        }
      });

      const itemsVerificados = await Promise.all(itemsConImagenPromesas);
      
      setItems(itemsVerificados);
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
    <div className="container mt-5">
      <h1 className="text-center mb-4">{title}</h1>
      
      {cargando && (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span> 
          </div>
          <p className="mt-2">Loading items...</p>
        </div>
      )}

      {!cargando && (
        <>
          <div className="row row-cols-1 row-cols-md-3 g-3"> 
            {items
               .map((item, index) => (
                 // Pasamos imageFolder a ItemCard (aunque no la use directamente, es buena práctica)
                 <ItemCard key={index} item={item} imageFolder={imageFolder} /> 
            ))}
          </div>

          <div className="d-flex justify-content-between mt-4">
            <button className="btn btn-primary" onClick={handleAnterior} disabled={pagina === 1}>
              Previous
            </button>
            <span>Page {pagina} of {totalPaginas}</span>
            <button className="btn btn-primary" onClick={handleProximo} disabled={pagina === totalPaginas}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CardGallery;