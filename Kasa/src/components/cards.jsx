import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../scss/components/_gallery.scss';

function Card({ id, title, cover }) {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate(`/accommodations/${id}`);
    };

    return (
        <div className="gallery_list_item" key={id} onClick={handleClick}>
            <img className="gallery_list_item_image" src={cover} alt={title} />
            <span className="gallery_list_item_title">{title}</span>
            <div className='orange-overlay'> </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default Card;