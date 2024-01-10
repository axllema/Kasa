import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import '../scss/pages/_error.scss';

function Error() {
    return (
        <div>
            <Header />
            <div className='error'>
                <h2 className='error_title'>404</h2>
                <p className='error_text'> Oups ! La page que vous demandez n&rsquo;existe pas.</p>
                {/* &rsquo; because ' wouldn't work */}
                <Link className='error_return' to="/"> Retourner sur la page d&rsquo;accueil</Link>
            </div>
            {/* Mettez le Footer ici à l'extérieur de la div 'error' */}
            <Footer />
        </div>
    );
}

export default Error;