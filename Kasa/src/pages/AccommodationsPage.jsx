import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { accommodationsList } from '../../backend/data.json';
import Header from '../components/header';
import Accommodation from '../components/accommodation';
import Carrousel from '../components/carrousel';
import Footer from '../components/footer';

// defines the functional component for the AccommodationsPage
function AccommodationsPage() {
    // gets the id parameter from the URL
    const { id } = useParams();
    // initializes the navigate function from the router
    const navigate = useNavigate();

    // finds the selected accommodation from the accommodationsList based on the id
    const selectedAccommodation = accommodationsList.find((acc) => acc.id === id);

    // useEffect to check if the selected accommodation exists
    useEffect(() => {
        // if the selected accommodation doesn't exist, navigate to the error page
        if (!selectedAccommodation) {
            navigate('/error');
        }
    }, [selectedAccommodation, navigate]);

    // if the selected accommodation exists, render the page
    if (selectedAccommodation) {
        return (
            <div>
                <Header />
                {/* renders the Carrousel component with pictures from the selected accommodation */}
                <Carrousel pictures={selectedAccommodation.pictures} />
                {/* renders the Accommodation component with details from the selected accommodation */}
                <Accommodation
                    title={selectedAccommodation.title}
                    cover={selectedAccommodation.cover}
                    tags={selectedAccommodation.tags}
                    description={selectedAccommodation.description}
                    equipments={selectedAccommodation.equipments}
                    host={selectedAccommodation.host}
                    rating={selectedAccommodation.rating}
                    location={selectedAccommodation.location}
                />
                <Footer />
            </div>
        );
    }
}

export default AccommodationsPage;
