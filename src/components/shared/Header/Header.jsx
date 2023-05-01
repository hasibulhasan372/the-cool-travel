import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container m-auto '>
           <div className="navbar justify-around  flex items-center bg-slate-200 ">
                <div className="">
                    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold ">The Cool Travel</Link>
                </div>
                <div className="ml-20 gap-2 w-56">
                    <div className="form-control w-full">
                        <input type="text" placeholder="Search your Destination" className="input input-bordered" />
                    </div>
                  
                </div>
                <div className=' flex gap-10 text-xl font-semibold'>
                <Link to='/'>News</Link>
                <Link to='/destination'>Destination</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/login' className='btn btn-warning'>Login</Link>
            </div>
         
           
           </div>
        </div>
    );
};

export default Header;