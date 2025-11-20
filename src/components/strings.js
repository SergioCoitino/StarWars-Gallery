// src/strings.js

// --- TEXTOS DE LA INTERFAZ (SOLO INGLÉS) ---
export const APP_TEXT = {
    title: "Interactive SWAPI Gallery",
    description1: "Explore and filter over 60 key resources from the Star Wars universe (Characters, Starships, Planets, etc.).",
    githubButton: "View Source Code (GitHub)",
    projectButton: "Another SWAPI Project"
};

// --- CONFIGURACIÓN DE RECURSOS SWAPI ---
export const RESOURCES = {
    'Characters': {
        apiEndpoint: 'https://swapi.dev/api/people/',
        imageFolder: '/src/assets/people/',
        title: 'Star Wars Characters'
    },
    'Planets': {
        apiEndpoint: 'https://swapi.dev/api/planets/', // 🚨 AGREGADO: Planets API
        imageFolder: '/src/assets/planets/',           // 🚨 Asumida carpeta de imágenes
        title: 'Star Wars Planets'
    },
    'Species': {
        apiEndpoint: 'https://swapi.dev/api/species/',
        imageFolder: '/src/assets/species/',
        title: 'Star Wars Species'
    },
    'Starships': {
        apiEndpoint: 'https://swapi.dev/api/starships/',
        imageFolder: '/src/assets/starships/',
        title: 'Star Wars Starships'
    },
    'Vehicles': {
        apiEndpoint: 'https://swapi.dev/api/vehicles/', // 🚨 AGREGADO: Vehicles API
        imageFolder: '/src/assets/vehicles/',           // 🚨 Asumida carpeta de imágenes
        title: 'Star Wars Vehicles'
    },
};

// Exportamos las claves para iteración
export const RESOURCE_KEYS = Object.keys(RESOURCES);