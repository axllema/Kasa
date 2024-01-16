import React from 'react';
import { useParams } from 'react-router-dom';
import { accommodationsList } from '../../backend/data.json';
import Header from '../components/header';
import Footer from '../components/footer';
import Accommodation from '../components/accommodation';

function AccommodationsPage() {
    const { id } = useParams();
    const selectedAccommodation = accommodationsList.find((acc) => acc.id === id);

    if (!selectedAccommodation) {
        return (
            <div>
                <Header />
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

export default AccommodationsPage;