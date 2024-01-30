import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Collapse from '../components/collapse';
import arrowDown from '../assets/arrow_forward.png';
import arrowUp from '../assets/arrow_back.png';
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
            <div className="tags-container">
                {tags.map((tag, index) => (
                    <p key={index} className="tag">{tag}</p>
                ))
                }
            </div>

            <div className="host_infos">
                <p className='host_infos__name'>{host.name}</p>
                <img src={host.picture} className='host_infos__picture' alt={host.name}/>
                    <div className="host_infos__rating">
                        <StarRating rating={parseFloat(rating)} />
                    </div>
            </div>

            <div className="buttons-container">
                {/* button to toggle visibility of description */}
                <button className="description_button" onClick={() => setDescriptionCollapsed(!descriptionCollapsed)}>
                    {descriptionCollapsed ? 'Description' : 'Description'}  <img src={descriptionCollapsed ? arrowDown : arrowUp} alt="Arrow" />
                </button>

                {/* button to toggle visibility of equipments */}
                <button className="equipments_button" onClick={() => setEquipmentsCollapsed(!equipmentsCollapsed)}>
                    {equipmentsCollapsed ? 'Équipements' : 'Équipements'}  <img src={equipmentsCollapsed ? arrowDown : arrowUp} alt="Arrow"/>
                </button>
            </div>

            {/* collapse components for description and equipments */}
            <Collapse isOpen={!descriptionCollapsed}>
                <p>{description}</p>
            </Collapse>

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
