import React from 'react';
import Image from 'next/image';
import image1 from '../components/image1.png';
import singlepaw from '../components/PAW.png';

const PawPrints = () => {
    const pawPrintImages = [
        {
            src: singlepaw,
            styles: {
                position: 'absolute',
                top: '450px',
                left: '875px',
                transform: 'rotate(-40deg) scale(0.55)',
                filter: 'contrast(1.1) brightness(1.05)',
            },
            objectPosition: '20% 20%',
        },
        {
            src: singlepaw,
            styles: {
                position: 'absolute',
                top: '410px',
                left: '825px',
                transform: 'rotate(-40deg) scale(0.47)',
                filter: 'contrast(1.1) brightness(1.05)',
            },
            objectPosition: '20% 20%',
        },
        {
            src: image1,
            styles: {
                position: 'absolute',
                top: '350px',
                left: '775px',
                transform: 'rotate(-30deg) scaleX(-1) scale(0.8)',
                filter: 'contrast(1.1) brightness(1.05)',
            },
            objectPosition: 'center bottom',
        },
        {
            src: image1,
            styles: {
                position: 'absolute',
                top: '275px',
                left: '740px',
                transform: 'rotate(-9deg) scale(0.8)',
                filter: 'contrast(1.1) brightness(1.05)',
            },
            objectPosition: '25% 25%',
        },
    ];

    return (
        <div>
            {pawPrintImages.map((imageData, index) => (
                <div
                    key={index}
                    style={{
                        width: '100px',
                        height: '100px',
                        position: 'relative', // Removed from imageData.styles, as it's now set here
                        overflow: 'hidden',
                        ...imageData.styles,
                    }}
                >
                    <Image
                        src={imageData.src}
                        alt={`Paw print ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition={imageData.objectPosition || 'center center'} // Default objectPosition if not provided
                    />
                </div>
            ))}
        </div>
    );
};

export default PawPrints;
