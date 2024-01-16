import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { accommodationsList } from '../../backend/data.json';
import Header from '../components/header';
import Footer from '../components/footer';
import Accommodation from '../components/accommodation';

function AccommodationsPage() {
    // extracts the 'id' parameter from the URL
    const { id } = useParams();
    // gets the 'navigate' function from the react-router-dom
    const navigate = useNavigate();

    // fins the accommodation with the matching id from the list
    const selectedAccommodation = accommodationsList.find((acc) => acc.id === id);

    // uses useEffect to perform side effects after rendering
    useEffect(() => {
        // if the accommodation is not found, navigate to the '/error' page
        if (!selectedAccommodation) {
            navigate('/error');
        }
    }, [selectedAccommodation, navigate]);

    // renders the component based on whether the accommodation is found
    if (selectedAccommodation) {
        return (
            <div>
                <Header />
                <h2>{selectedAccommodation.title}</h2>
                <Accommodation
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
}

export default AccommodationsPage;
