import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Destinations from '../Destinations/Destinations';

const Home = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
            .catch(error => {
                console.log(error)
            })
    }, []);
    

    return (
        <>
            <div className='grid lg:grid-cols-2 mt-36'>
                <div className='lg:pl-48'>
                    <h1 className='text-8xl uppercase'>Cox's Bazar</h1>
                    <p className='py-7'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to='/booking' className="btn text-black bg-[#F9A51A] rounded-md outline-none border-none">Booking</Link>
                </div>
                <div className='flex gap-4 items-end'>
                    {
                        destinations.map(destination => <Destinations
                        destination = {destination}
                        key={destination.id}
                        ></Destinations>
                        )
                    }
                </div>
            </div>

        </>
    );
};

export default Home;