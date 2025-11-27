import React, { useState } from 'react';
import Text from './Text'; 
import CardGallery from './CardGallery';
import { RESOURCES, RESOURCE_KEYS } from './strings'; 


function GalleryRouter() {
    const [activeResource, setActiveResource] = useState('Characters');

    const handleResourceChange = (resourceKey) => {
        if (RESOURCES[resourceKey]) {
            setActiveResource(resourceKey);
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