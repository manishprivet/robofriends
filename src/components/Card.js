import React from 'react';

function Card({id, name, email}) {
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt={`${name}-RobotImage`}/>
            <div>
                <h2>{name}</h2>
                <h3>{email}</h3>
            </div>
        </div>
    );
}

export default Card;