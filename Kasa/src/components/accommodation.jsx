import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from '../components/collapse';
import StarRating from '../components/starRating';

// defines the Accommodation component
const Accommodation = ({ title, location, cover, tags, description, equipments, host, rating }) => {
    // states to track whether description is collapsed or not
    const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);
    // states to track whether equipments are collapsed or not
    const [equipmentsCollapsed, setEquipmentsCollapsed] = useState(true);

    // renders the Accommodation component with details and collapse buttons
    return (
        <div className="accommodation">
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{tags.join(', ')}</p>
            <p className='hostName'>{host.name}</p>
            <img src={host.picture} className='hostPicture' alt={host.name}/>
            <StarRating rating={parseFloat(rating)} />


            {/* button to toggle visibility of description */}
            <button onClick={() => setDescriptionCollapsed(!descriptionCollapsed)}>
                {descriptionCollapsed ? 'Description' : 'Description'}
            </button>
            {/* collapse component to hide/show description */}
            <Collapse isOpen={!descriptionCollapsed}>
                <p>{description}</p>
            </Collapse>

            <button onClick={() => setEquipmentsCollapsed(!equipmentsCollapsed)}>
                {equipmentsCollapsed ? 'Équipements' : 'Équipements'}
            </button>
            <Collapse isOpen={!equipmentsCollapsed}>
                <p>{equipments.join(', ')}</p>
            </Collapse>
        </div>
    );
};

// PropTypes for the Accommodation component
Accommodation.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default Accommodation;
