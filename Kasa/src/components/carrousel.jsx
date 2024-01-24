import React, { useState } from 'react';
import PropTypes from 'prop-types';

// defines the Carrousel component
const Carrousel = ({ pictures }) => {
    // states to keep track of the current picture index
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

   // function to go to the next picture
const nextPicture = () => {
    // setCurrentPictureIndex is a function from the useState hook to update the state
    setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    // the function takes the previous index (prevIndex) and increments it by 1
    // if the result is equal to pictures.length, it wraps around to 0 using the modulus operator (%)
    // this way, it creates a looping effect, allowing the carousel to cycle through pictures
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
