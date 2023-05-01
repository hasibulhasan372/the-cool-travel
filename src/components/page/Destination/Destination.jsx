import React, { useContext, useEffect, useState } from 'react';
import { Form, Link, useLoaderData } from 'react-router-dom';
import Hotels from '../Hotels/Hotels';
import BookNow from '../BookNow/BookNow';
import { AuthContext } from '../../../Provider/AuthProvider';

const Destination = () => {
    const placeToVisit = useLoaderData();
    return (
        <div className='container m-auto lg:mt-48 grid lg:grid-cols-2 lg:gap-48'>
            <div>
            <h1 className='text-8xl leading-[117px] mb-4'>{placeToVisit.place}</h1>
            <p>{placeToVisit.details}</p>
            </div>
            <div>
                <Form className='border p-10 rounded'>
                    <label htmlFor="" className='block mb-6'>
                        <span className='block text-lg font-semibold pb-1'>Origin</span>
                        <input type="text" name='origin' placeholder='Starting from' className='border py-2 rounded w-3/6 pl-4 text-xl font-bold placeholder:text-black' />

                    </label>
                    <label htmlFor="" className='block mb-6'>
                        <span className='block text-lg font-semibold pb-1'>Destination</span>
                        <input type="text" name='origin' placeholder={placeToVisit.place} className='border py-2 rounded w-3/6 pl-4 text-xl font-bold placeholder:text-black' />
                    </label>
                    <label htmlFor="" className='block'>
                        <span className='block text-lg font-semibold pb-1'> From</span>
                        <input type="text" name='origin' placeholder={placeToVisit.place} className='border py-2 rounded w-3/6 pl-4 text-xl font-bold placeholder:text-black' />
                    </label>
                    <Link to={`/hotelsDestination/${placeToVisit.id}`}>Book</Link>
                </Form>
            </div>
        </div>
    );
};

export default Destination;