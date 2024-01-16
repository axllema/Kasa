import React from 'react';
import CardsList from '../components/cardsList';
import '../scss/components/_gallery.scss';

function Gallery() {
    return (
       /* <div className='gallery_container'> */
    <div className="gallery">
        <CardsList />
    </div>
  /*   </div>*/
    );
}

export default Gallery;
