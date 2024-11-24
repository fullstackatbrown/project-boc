import Facebook from "@/assets/images/facebook.png";
import Instagram from "@/assets/images/instagram.png";
import Twitter from "@/assets/images/twitter.png";
import Image from 'next/image';

const SocialMedia: React.FC = () => {
    const socialLinks = [
        {
            href: "https://www.facebook.com/brownoutingclub/",
            src: Facebook.src,
            alt: "Facebook",
        },
        {
            href: "https://www.instagram.com/brownoutingclub/?hl=en",
            src: Instagram.src,
            alt: "Instagram",
        },
        {
            href: "https://www.twitter.com",
            src: Twitter.src,
            alt: "Twitter",
        },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px', width: '100%', marginLeft: '-20px' }}>
            {socialLinks.map(({ href, src, alt }, index) => (
                <a key={index} href={href} target="_blank" rel="noopener noreferrer" style={{ margin: '0 15px' }}>
                    <Image src={src} alt={alt} width={40} height={40} />
                </a>
            ))}
        </div>
    );
};

export default SocialMedia;



