import { accommodationsList } from '../../backend/data.json';
// importing React library
import * as React from 'react';
// propTypes : mechanism in React used for type-checking the props that a component receives.
import PropTypes from 'prop-types';
import '../scss/components/_cards.scss';

// card component for rendering individual accommodation cards
function Card({ id, title, cover }) {
    return (
        // Each card is represented as an <li> element with a unique key based on the id
        <li key={id}>
            {/* displaying the cover image with alt text as the title */}
            <img src={cover} alt={title} />
            {/* displaying the title of the accommodation */}
            {title}
        </li>
    );
}

// defining prop types for the Card component
Card.propTypes = {
    // id should be a string and is required
    id: PropTypes.string.isRequired,
    // title should be a string and is required
    title: PropTypes.string.isRequired,
    // cover should be a string and is required
    cover: PropTypes.string.isRequired,
};

// CardsList component for rendering a list of accommodation cards
function CardsList() {
    return <div className="accommodations_list"> 
            <ul className="list">
                {/* mapping over the accommodationsList and rendering Card components */}
                {accommodationsList.map(({ id, title, cover }) => (
                    <Card
                        // setting the id, title, and cover as props for the Card component
                        key={id}
                        id={id}
                        title={title}
                        cover={cover}
                    />
                ))}
            </ul>
        </div>
}

// exporting the CardsList component as the default export of this module
export default CardsList;
