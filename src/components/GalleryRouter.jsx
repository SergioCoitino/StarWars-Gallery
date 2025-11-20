// src/components/GalleryRouter.js
import React, { useState } from 'react';
import Text from './Text'; 
import CardGallery from './CardGallery';
// 🚨 Importamos las configuraciones y claves del nuevo archivo
import { RESOURCES, RESOURCE_KEYS } from './strings'; 


function GalleryRouter() {
    // Estado inicial: 'Characters'
    const [activeResource, setActiveResource] = useState('Characters');

    const handleResourceChange = (resourceKey) => {
        if (RESOURCES[resourceKey]) {
            setActiveResource(resourceKey);
        }
    };

    const activeConfig = RESOURCES[activeResource];

    return (
        <div className="gallery-router">
            
            {/* Componente Text: Pasamos solo las claves necesarias */}
            <Text 
                onResourceChange={handleResourceChange}
                activeResource={activeResource}
                resourceKeys={RESOURCE_KEYS} // Aseguramos que Text use las claves definidas
            />
            
            {/* Componente CardGallery */}
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