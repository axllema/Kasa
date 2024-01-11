// importing the Link component from react-router-dom
import { Link } from "react-router-dom"
import * as React from 'react';
import logo from '../assets/logo.png'
import '../scss/layout/_header.scss';

function Header () {
    return <div className="header">
            <Link to="/">
                <img alt="logo" src={logo} />
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
    </div>
    
}

export default Header