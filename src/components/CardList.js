import React from 'react';
import Card from './Card';

function CardList({ robots }) {
    return (
        <div>
            {
                robots.map(user => {
                    return <Card
                        key={user.id.toString()}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                    />
                })
            }
        </div>
    );
}

export default CardList;