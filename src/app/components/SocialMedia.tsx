import Image from 'next/image';

const SocialMedia: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px', width: '100%', marginLeft: '-20px' }}>
            <a href="https://www.facebook.com/brownoutingclub/" target="_blank" rel="noopener noreferrer">
                <Image src="/facebook.png" alt="Facebook" width={40} height={40} style={{ margin: '0 15px' }} />
            </a>
            <a href="https://www.instagram.com/brownoutingclub/?hl=en" target="_blank" rel="noopener noreferrer">
                <Image src="/instagram.png" alt="Instagram" width={40} height={40} style={{ margin: '0 15px' }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src="/twitter.png" alt="Twitter" width={40} height={40} style={{ margin: '0 15px' }} />
            </a>
        </div>
    );
};

export default SocialMedia;



