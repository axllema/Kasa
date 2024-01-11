import { accommodationsList } from '../../backend/data.json';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // changes the import to useNavigate
import '../scss/components/_cards.scss';

// defines the Card component
function Card({ id, title, cover }) {
    // accesses the navigate function using useNavigate
    const navigate = useNavigate();

    // handles the click event on the card
    const handleClick = () => {
        // uses the navigate function to navigate to the Accommodations page with the specific ID
        navigate(`/accommodations/${id}`);
    };

    return (
        <li key={id} onClick={handleClick}>
            <img src={cover} alt={title} />
            <span className="card-title">{title}</span>
        </li>
    );
}

// defines the prop types for the Card component
Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

// define the CardsList component
function CardsList() {
    return (
        <div className="accommodations_list">
            <ul className="list">
                {accommodationsList.map(({ id, title, cover }) => (
                    <Card key={id} id={id} title={title} cover={cover} />
                ))}
            </ul>
        </div>
    );
}

// exports the CardsList component as the default export of this module
export default CardsList;
