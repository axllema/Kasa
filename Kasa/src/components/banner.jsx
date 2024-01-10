// importing React library
import * as React from 'react';
import banner_background from '../assets/banner_background.png'

function Banner () {
    return <div className="banner">
        <img src={banner_background}/>
        <span>Chez vous, partout et ailleurs</span>
    </div>
}
export default Banner;