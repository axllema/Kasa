import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CollapseSection from '../components/collapseSection';
import StarRating from '../components/starRating';
import '../scss/components/_collapse.scss';

// Defines the Accommodation component
const Accommodation = ({ title, location, cover, tags, description, equipments, host, rating }) => {
    // States to track whether description is collapsed or not
    const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);
    // States to track whether equipments are collapsed or not
    const [equipmentsCollapsed, setEquipmentsCollapsed] = useState(true);

    // Renders the Accommodation component with details and collapse buttons
    return (
        <div>
            <div className="accommodation-card">
            {/* <div className="accommodation-card__infos-container"> */}

                    <div className="accommodation-card__acc_infos">
                        <h2 className='accommodation-card__acc_infos__title'>{title}</h2>
                        <p className='accommodation-card__acc_infos__location'>{location}</p>

                        <ul className="accommodation-card__tags-container">
                            {tags.map((tag, index) => (
                                <li key={index} className="tag">{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="accommodation-card__host_infos">
                        <div className="accommodation-card__host_infos__important">
                            <p className='accommodation-card__host_infos__name'>{host.name}</p>
                            <img src={host.picture} className='accommodation-card__host_infos__picture' alt={host.name} />
                        </div>
                        <div className="accommodation-card__host_infos__rating">
                        <StarRating rating={parseFloat(rating)} />
                        </div>
                    </div>
              {/*  </div> */}

            </div>

                <div className="collapse_container">
                    <CollapseSection
                        title="Description"
                        containerClassName="collapse_container__infos"
                        content={description}
                    />
                    
                    <CollapseSection
                        title="Équipements"
                        containerClassName="collapse_container__infos"
                        content={equipments}
                    />
                </div>
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
