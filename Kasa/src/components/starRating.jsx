import React from 'react';
import PropTypes from 'prop-types';
import '../scss/components/_starRating.scss'

// StarRating component takes a 'rating' prop to display star rating
const StarRating = ({ rating }) => {
    // calculates the number of filled stars based on the provided rating
    const filledStars = Math.floor(rating);

    // renders the star rating
    return (
        <div className="star-rating">
        {/* uses Array to create an array with a length of 5, then map through it */}
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < filledStars ? 'filled' : 'empty'}>
                {/* displays filled star '★' if index is less than filledStars, otherwise empty star '☆' */}
                {index < filledStars ? '★' : '☆'}
                </span>
            ))
            }
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
}; 

export default StarRating;