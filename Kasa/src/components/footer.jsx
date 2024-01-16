import * as React from 'react';
import Logo from '../components/logo';
import '../scss/layout/_footer.scss';

function Footer () {
    return <div className="footer">
                <Logo />
                <span>© 2020 Kasa. All rights reserved</span>
            </div>
}

export default Footer;