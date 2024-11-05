import { ReactElement } from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import '../style/footer.css';

export default function Footer() {
    return (
        <div className='main-container'>
            {/* socials  */}
            <div className='container'>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="icon-container">
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
            </div>

            {/* info pages  */}
            <ul className='container'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    );
}