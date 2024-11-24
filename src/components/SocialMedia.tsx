import Facebook from "@/assets/images/facebook.png";
import Instagram from "@/assets/images/instagram.png";
import Twitter from "@/assets/images/twitter.png";
import Image from 'next/image';

const SocialMedia: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px', width: '100%', marginLeft: '-20px' }}>
            <a href="https://www.facebook.com/brownoutingclub/" target="_blank" rel="noopener noreferrer">
                <Image src={Facebook.src} alt="Facebook" width={40} height={40} style={{ margin: '0 15px' }} />
            </a>
            <a href="https://www.instagram.com/brownoutingclub/?hl=en" target="_blank" rel="noopener noreferrer">
                <Image src={Instagram.src} alt="Instagram" width={40} height={40} style={{ margin: '0 15px' }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src={Twitter.src} alt="Twitter" width={40} height={40} style={{ margin: '0 15px' }} />
            </a>
        </div>
    );
};

export default SocialMedia;



