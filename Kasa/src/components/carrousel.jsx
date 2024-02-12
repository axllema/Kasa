import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/components/_carrousel.scss';

const Carrousel = ({ pictures }) => {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

const nextPicture = () => {
    setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length); 
};

    const prevPicture = () => {
        setCurrentPictureIndex(
            (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
        );
    };

    // determines if there's only one picture
    const isSinglePicture = pictures.length === 1;

    // renders the Carrousel component with buttons to navigate between pictures
    return (
        <div className="carrousel">
            {pictures.length > 0 && (
                <>
                    <div className="carrousel__img-container">
                        <img
                            className="carrousel__img"
                            src={pictures[currentPictureIndex]}
                            alt={`Slide ${currentPictureIndex + 1}`}
                        />
                        
                        {/* renders the counter only if there's more than one picture */}
                        {!isSinglePicture && (
                            <div className="carrousel__counter">
                                {currentPictureIndex + 1}/{pictures.length}
                            </div>
                        )}
                    </div>
                </>
            )}


             {/* renders arrows only if there's more than one picture */}
            {pictures.length > 1 && (
                <>
                    <button className="carrousel__left_arrow" onClick={prevPicture}>
                        &lt;
                    </button>
                    <button className="carrousel__right_arrow" onClick={nextPicture}>
                        &gt;
                    </button>
                </>
            )}
        </div>
    );
    };

Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
