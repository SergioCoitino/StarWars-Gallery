
export const APP_TEXT = {
    title: "Interactive SWAPI Gallery",
    description1: "Explore and filter over 60 key resources from the Star Wars universe (Characters, Starships, Planets, Species, and Vehicles).",
    githubButton: "GitHub (Sergio Coitiño)",
    projectButton: "Star Wars App",
    donateButton: "Support the Developer"
};

// --- DOACIÓN (PayPal) ---
export const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=GS4USLXPYWNSN';

// --- CONFIGURACIÓN DE RECURSOS SWAPI ---
export const RESOURCES = {
    'Characters': {
        apiEndpoint: 'https://swapi.dev/api/people/',
        imageFolder: '/assets/people/',
        title: 'Star Wars Characters',
        seoTitle: 'Star Wars Characters Gallery — HD Images & SWAPI Database',
        seoDescription: 'Browse high-definition images of Star Wars characters including Luke Skywalker, Darth Vader, Leia Organa, Yoda, and Obi-Wan Kenobi powered by SWAPI.'
    },
    'Planets': {
        apiEndpoint: 'https://swapi.dev/api/planets/', 
        imageFolder: '/assets/planets/',          
        title: 'Star Wars Planets',
        seoTitle: 'Star Wars Planets Gallery — Tatooine, Naboo, Coruscant & More',
        seoDescription: 'Explore visual cards of iconic Star Wars planets including Tatooine, Alderaan, Hoth, Dagobah, Bespin, Endor, Naboo, and Coruscant.'
    },
    'Species': {
        apiEndpoint: 'https://swapi.dev/api/species/',
        imageFolder: '/assets/species/',
        title: 'Star Wars Species',
        seoTitle: 'Star Wars Species Gallery — Wookiees, Droids, Ewoks & Aliens',
        seoDescription: 'Visual guide to Star Wars species from the SWAPI database including Humans, Droids, Wookiees, Twi\'leks, Rodians, Hutts, and Ewoks.'
    },
    'Starships': {
        apiEndpoint: 'https://swapi.dev/api/starships/',
        imageFolder: '/assets/starships/',
        title: 'Star Wars Starships',
        seoTitle: 'Star Wars Starships Gallery — Millennium Falcon & X-Wing',
        seoDescription: 'High-resolution gallery of Star Wars starships including the Millennium Falcon, X-wing, TIE Advanced, Death Star, and Imperial Star Destroyer.'
    },
    'Vehicles': {
        apiEndpoint: 'https://swapi.dev/api/vehicles/', 
        imageFolder: '/assets/vehicles/',           
        title: 'Star Wars Vehicles',
        seoTitle: 'Star Wars Vehicles Gallery — AT-AT, Snowspeeder & Sandcrawler',
        seoDescription: 'Browse Star Wars ground and atmospheric vehicles including AT-AT walkers, Snowspeeders, Sandcrawlers, and Speeder Bikes.'
    },
};

export const RESOURCE_KEYS = Object.keys(RESOURCES);
