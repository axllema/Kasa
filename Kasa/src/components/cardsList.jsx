import React from 'react';
import { accommodationsList } from '../../backend/data.json';
import Card from './cards';
import '../scss/components/_gallery.scss';

function CardsList() {
    return (
        <div className="gallery_list">
        {accommodationsList.map(({ id, title, cover }) => (
            <Card key={id} id={id} title={title} cover={cover} />
    ))}
    </div>
    );
}

export default CardsList;
