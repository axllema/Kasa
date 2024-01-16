// importing the Link component from react-router-dom
import { Link } from "react-router-dom"
import * as React from 'react';
import Logo from '../components/logo';
import '../scss/layout/_header.scss';

function Header () {
    return <div className="header">
        <Logo />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
    </div>
    
}

export default Header