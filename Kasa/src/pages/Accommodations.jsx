import React from 'react';
import { useParams } from 'react-router-dom';
import { accommodationsList } from '../../backend/data.json';
import Header from '../components/header';
import Footer from '../components/footer';
import PropTypes from 'prop-types';

// defines the Accommodations component
const Accommodations = ({ title, cover, tags, description, equipments }) => {
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

// adding PropTypes for type validation
Accommodations.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function AccommodationsPage() {
    // access the id parameter from the route
    const { id } = useParams();

    // finds the accommodation with the matching id from the list
    const selectedAccommodation = accommodationsList.find((acc) => acc.id === id);

    if (!selectedAccommodation) {
        // handles case where accommodation is not found
        return (
            <div>
                <Header />
                {/* displaying a header and a message when accommodation is not found */}
                <h2>Accommodation Not Found</h2>
                <p>No accommodation found for ID: {id}</p>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <h2>{selectedAccommodation.title}</h2>
            {/* renders content based on the accommodation id */}
            {/* rendering the Accommodations component with the details of the selected accommodation */}
            <Accommodations
                title={selectedAccommodation.title}
                cover={selectedAccommodation.cover}
                tags={selectedAccommodation.tags}
                description={selectedAccommodation.description}
                equipments={selectedAccommodation.equipments}
            />
            <Footer />
        </div>
    );
}

export default AccommodationsPage;
