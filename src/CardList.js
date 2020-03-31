import React from 'react';
import Card from './Card';

function CardList({ robots }) {

    const cardArrays = robots.map(user => {
        return <Card id={user.id} name={user.name} email={user.email} key={user.id.toString()} />
    })
    return (
        <div>
            {cardArrays}
        </div>
    );
}

export default CardList;