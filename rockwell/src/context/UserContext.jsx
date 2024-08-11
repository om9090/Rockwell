import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(() => {
        // Retrieve user info from localStorage, if available
        const savedUserInfo = localStorage.getItem('userInfo');
        return savedUserInfo ? JSON.parse(savedUserInfo) : null;
    });

    useEffect(() => {
        if (userInfo) {
            // Save user info to localStorage
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        } else {
            // Remove user info from localStorage if userInfo is null
            localStorage.removeItem('userInfo');
        }
    }, [userInfo]);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
