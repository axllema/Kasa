import React, { useState } from 'react';
import PropTypes from 'prop-types';

// defines the Carrousel component
const Carrousel = ({ pictures }) => {
    // states to keep track of the current picture index
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    // function to go to the next picture
    const nextPicture = () => {
        setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    // function to go to the previous picture
    const prevPicture = () => {
        setCurrentPictureIndex(
            (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
        );
    };

    // renders the Carrousel component with buttons to navigate between pictures
    return (
        <div className="carousel">
            <button onClick={prevPicture}>&lt;</button>
            {/* display the current picture */}
            {pictures.length > 0 && (
                <img
                    src={pictures[currentPictureIndex]}
                    alt={`Slide ${currentPictureIndex}`}
                />
            )}
            <button onClick={nextPicture}>&gt;</button>
        </div>
    );
};

// PropTypes for the Carrousel component
Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
