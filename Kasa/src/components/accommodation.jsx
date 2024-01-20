import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from '../components/collapse';

const Accommodation = ({ title, location, cover, tags, description, equipments, host, rating }) => {
    const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);
    const [equipmentsCollapsed, setEquipmentsCollapsed] = useState(true);

    return (
        <div className="accommodation">
            <img src={cover} alt={title} />
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{tags.join(', ')}</p>
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
            <p>{rating}</p>

            <button onClick={() => setDescriptionCollapsed(!descriptionCollapsed)}>
                {descriptionCollapsed ? 'Description' : 'Description'}
            </button>
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
    location : PropTypes.string.isRequired
};

export default Accommodation;
