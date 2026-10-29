import React, { useState, useEffect } from 'react';
import Text from './Text'; 
import CardGallery from './CardGallery';
import { RESOURCES, RESOURCE_KEYS } from './strings'; 

// Homepage SEO values defined in index.html (kept for the default category)
const HOME_TITLE = document.title;
const HOME_DESCRIPTION = document.querySelector('meta[name="description"]')?.getAttribute('content');

function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat && RESOURCES[cat]) {
        return cat;
    }
    return 'Characters';
}

function GalleryRouter() {
    const [activeResource, setActiveResource] = useState(getCategoryFromUrl);

    useEffect(() => {
        const handlePopState = () => {
            setActiveResource(getCategoryFromUrl());
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    useEffect(() => {
        const config = RESOURCES[activeResource];
        if (!config) return;

        // Update document title & meta description for SEO
        // (the default category keeps the homepage title/description from index.html)
        const isHome = activeResource === 'Characters';
        document.title = isHome
            ? HOME_TITLE
            : config.seoTitle || `${config.title} — Star Wars Gallery`;
        const metaDescription = document.querySelector('meta[name="description"]');
        const description = isHome ? HOME_DESCRIPTION : config.seoDescription;
        if (metaDescription && description) {
            metaDescription.setAttribute('content', description);
        }

        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            const baseUrl = 'https://starwarsgallery.netlify.app/';
            canonical.setAttribute(
                'href',
                activeResource === 'Characters' ? baseUrl : `${baseUrl}?category=${activeResource}`
            );
        }
    }, [activeResource]);

    const handleResourceChange = (resourceKey) => {
        if (RESOURCES[resourceKey]) {
            setActiveResource(resourceKey);
            const newUrl = resourceKey === 'Characters'
                ? window.location.pathname
                : `${window.location.pathname}?category=${resourceKey}`;
            window.history.pushState({ category: resourceKey }, '', newUrl);
        }
    };

    const activeConfig = RESOURCES[activeResource];

    return (
        <div className="gallery-router">
            <Text 
                onResourceChange={handleResourceChange}
                activeResource={activeResource}
                resourceKeys={RESOURCE_KEYS} 
            />
            
            <CardGallery 
                apiEndpoint={activeConfig.apiEndpoint}
                imageFolder={activeConfig.imageFolder}
                title={activeConfig.title}
                key={activeResource} 
            />
        </div>
    );
}

export default GalleryRouter;
