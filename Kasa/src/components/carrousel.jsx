import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/components/_carrousel.scss';

// defines the Carrousel component
const Carrousel = ({ pictures }) => {
    // states to keep track of the current picture index
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

   // function to go to the next picture
const nextPicture = () => {
    // setCurrentPictureIndex is a function from the useState hook to update the state
    setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length); 
    {/* the function takes the previous index (prevIndex) and increments it by 1 -
    if the result is equal to pictures.length, it wraps around to 0 using the modulus operator (%).
    this way, it creates a looping effect, allowing the carousel to cycle through pictures. */}
};

    // function to go to the previous picture
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

            {/* In React, the empty angle brackets <> and </> are used to create a fragment.
            A fragment is a way to group multiple children elements without adding extra nodes to the DOM. It's a shorthand syntax for <React.Fragment>.
            In the provided code, the fragment <>...</> is used to wrap multiple elements inside the {pictures.length > 0 && (...)} conditional block. */}

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

// PropTypes for the Carrousel component
Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;
