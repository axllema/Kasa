import React from 'react';
import PropTypes from 'prop-types';

const Accommodation = ({ title, cover, tags, description, equipments }) => {
    return (
        <div className="accommodation">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
            <p>Tags: {tags.join(', ')}</p>
            <p>Description: {description}</p>
            <p>Equipments: {equipments.join(', ')}</p>
        </div>
    );
};

Accommodation.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Accommodation;