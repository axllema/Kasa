import React from 'react';
import PropTypes from 'prop-types';
import filledStar from '../assets/filledStar.svg';
import emptyStar from '../assets/emptyStar.svg';
import '../scss/components/_starRating.scss'

// StarRating component takes a 'rating' prop to display star rating
const StarRating = ({ rating }) => {
    // calculates the number of filled stars based on the provided rating
    const filledStars = Math.floor(rating);

    // renders the star rating
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <img
                key={index}
                src={index < filledStars ? filledStar : emptyStar}
                alt={index < filledStars ? 'filled star' : 'empty star'}
                className="star"
                />
            ))}
        </div>
    );
        };
        
        StarRating.propTypes = {
            rating: PropTypes.number.isRequired,
        };
        
        export default StarRating;