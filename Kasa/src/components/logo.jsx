// importing the Link component from react-router-dom
import { Link } from "react-router-dom"
import * as React from 'react';
import logo from '../assets/LOGO.SVG'


function Logo () {
    return <div className="logo">
            <Link to="/">
                <img alt="logo" src={logo} />
            </Link>
    </div>
}

export default Logo