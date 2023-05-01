import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [hotel, setHotel] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/hotelsDestination')
        .then(res => res.json())
        .then(data => 
            {
             data.map(h => setHotel(h))
                
            }
            )
    }, []);
    const authInfo = {
        hotel
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;