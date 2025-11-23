
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
        imageFolder: '/assets/people/',
        title: 'Star Wars Characters'
    },
    'Planets': {
        apiEndpoint: 'https://swapi.dev/api/planets/', 
        imageFolder: '/assets/planets/',          
        title: 'Star Wars Planets'
    },
    'Species': {
        apiEndpoint: 'https://swapi.dev/api/species/',
        imageFolder: '/assets/species/',
        title: 'Star Wars Species'
    },
    'Starships': {
        apiEndpoint: 'https://swapi.dev/api/starships/',
        imageFolder: '/assets/starships/',
        title: 'Star Wars Starships'
    },
    'Vehicles': {
        apiEndpoint: 'https://swapi.dev/api/vehicles/', 
        imageFolder: '/assets/vehicles/',           
        title: 'Star Wars Vehicles'
    },
};

export const RESOURCE_KEYS = Object.keys(RESOURCES);