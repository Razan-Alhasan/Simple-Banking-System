import React from 'react';
import './Footer.css'; 
import { MDBFooter} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='footer'>
            <div>

        <p>&copy; 2024 R-Sparks Bank. All rights reserved || <span className='name'>Created by: Eng. Razan Alhasan</span></p>
            </div>
        </MDBFooter>
    );
}

export default Footer;
