import * as React from 'react';
import { Link } from 'react-router-dom';
import '../scss/pages/_error.scss';

function Error() {
    return (
    <div>
        <h2>404 </h2>
        <p> Oups ! La page que vous demandez n&rsquo;existe pas.</p>
        {/* &rsquo; because ' wouldn't work */}
        <Link to="/"> Retourner sur la page d&rsquo;accueil</Link>
    </div>
    );
}

export default Error;