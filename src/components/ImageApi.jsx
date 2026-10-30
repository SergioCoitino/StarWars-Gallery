import React from 'react';
import { PAYPAL_DONATE_URL } from './strings';

const BASE_URL = 'https://starwarsgallery.netlify.app';

const EXAMPLES = [
  { category: 'people', id: 1, label: 'Luke Skywalker' },
  { category: 'planets', id: 1, label: 'Tatooine' },
  { category: 'species', id: 3, label: 'Wookiee' },
  { category: 'starships', id: 10, label: 'Millennium Falcon' },
  { category: 'vehicles', id: 14, label: 'Snowspeeder' },
];

const CODE_EXAMPLE = `const getSwapiImage = (category, swapiUrl) => {
  const id = swapiUrl.split('/').filter(Boolean).pop();
  return \`${BASE_URL}/assets/\${category}/\${id}.jpg\`;
};

getSwapiImage('people', 'https://swapi.dev/api/people/1/');
// => "${BASE_URL}/assets/people/1.jpg"`;

function ImageApi() {
  return (
    <section id="image-api" className="container py-5" aria-labelledby="image-api-heading">
      <h2 id="image-api-heading" className="text-center mb-3">SWAPI Image API</h2>
      <p className="lead text-center text-body-secondary mb-4">
        Need images for SWAPI (The Star Wars API)? Use this gallery as a free image API: every image
        uses the <strong>same ID as its SWAPI resource</strong>. CORS is enabled and no API key is required.
      </p>

      <p className="text-center">
        <code>{BASE_URL}/assets/{'{category}'}/{'{id}'}.jpg</code>
      </p>

      <div className="table-responsive">
        <table className="table table-sm align-middle">
          <thead>
            <tr>
              <th scope="col">SWAPI resource</th>
              <th scope="col">Image URL</th>
            </tr>
          </thead>
          <tbody>
            {EXAMPLES.map(({ category, id, label }) => (
              <tr key={category}>
                <td>
                  <code>swapi.dev/api/{category}/{id}/</code> <span className="text-body-secondary">({label})</span>
                </td>
                <td>
                  <a href={`/assets/${category}/${id}.jpg`} target="_blank" rel="noopener noreferrer">
                    <code>/assets/{category}/{id}.jpg</code>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <pre className="bg-dark text-light p-3 rounded small"><code>{CODE_EXAMPLE}</code></pre>

      <ul className="small text-body-secondary">
        <li>
          List of all available IDs: <a href="/api/images.json" target="_blank" rel="noopener noreferrer"><code>/api/images.json</code></a>
        </li>
        <li>
          Full documentation with JavaScript, React and Python examples: <a href="/swapi-image-api/">SWAPI Images API docs</a>
        </li>
        <li>Missing images return HTTP <code>404</code>, so <code>&lt;img onError&gt;</code> fallbacks work correctly.</li>
        <li>Compatible with SWAPI mirrors that keep the same IDs (<code>swapi.dev</code>, <code>swapi.py4e.com</code>, <code>swapi.tech</code>).</li>
        <li>
          Live real-world demo: see it integrated in the <a href="https://star-warsapp.netlify.app/" target="_blank" rel="noopener noreferrer">Star Wars App</a>.
        </li>
      </ul>

      <div className="text-center mt-4">
        <p className="text-body-secondary mb-2">
          This image API is free. If it helped your project, consider supporting the developer and the hosting costs.
        </p>
        <a href={PAYPAL_DONATE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-warning">
          <i className="bi bi-paypal me-1" aria-hidden="true"></i>
          Donate with PayPal
        </a>
      </div>
    </section>
  );
}

export default ImageApi;
