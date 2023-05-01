import React from 'react';
import { Link } from 'react-router-dom';

const Destinations = ({destination}) => {
    return (
        <div>
            <Link to={`./destinations/${destination.id}`} key={destination.id} className=''>
                            <img src={destination.img} alt="" />
                        <p className='' >{destination.place}</p>
                            
                        </Link>
        </div>
    );
};

export default Destinations;
