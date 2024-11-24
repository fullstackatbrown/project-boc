import Instagram from "@/assets/images/instagram.png";
import Twitter from "@/assets/images/twitter.png";
import React from 'react';
import Image from 'next/image';


const SocialMedia: React.FC = () => {
    const socialLinks = [
        {
            href: "https://www.facebook.com/brownoutingclub/",
            src: Facebook.src,
            alt: "Facebook",
            label: "Visit our Facebook page",
        },
        {
            href: "https://www.instagram.com/brownoutingclub/?hl=en",
            src: Instagram.src,
            alt: "Instagram",
            label: "Visit our Instagram profile",
        },
        {
            href: "https://www.twitter.com",
            src: Twitter.src,
            alt: "Twitter",
            label: "Visit our Twitter page",
        },
    ];

    const containerStyles = {
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '10px',
        width: '100%',
        marginLeft: '-5%',
    };

    const linkStyles = {
        margin: '0 3%',
        display: 'inline-block',
    };

    return (
        <div style={containerStyles}>
        {socialLinks.map(({ href, src, alt, label }, index) => (
            <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={linkStyles}
            >
            <Image 
            src={src} 
            alt={alt} 
            width={40} 
            height={40} 
            priority 
            />
        },
        ));
    );
};

export default SocialMedia;




