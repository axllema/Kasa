import * as React from 'react';
import whiteLogo from '../assets/logo-white.png'
import '../scss/layout/_footer.scss';

function Footer () {
    return <div className="footer">
                <img alt="Kasa logo in white" src={whiteLogo}></img>
                <span>© 2020 Kasa. All rights reserved</span>
            </div>
}

export default Footer;