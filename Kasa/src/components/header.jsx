// importing the Link component from react-router-dom
import { Link } from "react-router-dom"
import * as React from 'react';
import Logo from '../components/logo';
import '../scss/layout/_header.scss';

function Header () {
    return <div className="header">
        <Logo />
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}> Accueil </Link>
                <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}> A propos </Link>
            </nav>
    </div>
}

{/*  The <Link> tags create navigation links in the application using React Router - each link points to a specific URL defined by the "to" attribute.
For each link in the navigation menu, we check if the current page's URL matches the link's URL. If it does, we add the 'active' class to the link,
which highlights it to indicate to the user that they are on that page. (here : the "Accueil" ou "À propos" is underlined) */}

export default Header;