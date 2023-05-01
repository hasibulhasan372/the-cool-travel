import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Hotels = () => {
    const hotels = useLoaderData()
    console.log(hotels)
    
    return (
        <div>
            <h1>This is the hotel part{hotels.length}</h1>
            {
                    hotels.map(hotel => <p className='border' key={hotel.id}>{hotel.name}</p>)
            }
        </div>
    );
};

export default Hotels;