import React, { createContext, useState } from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import "./styles.css"

export const UserContext = createContext();

const AuthApp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn((prev) => !prev);
    }

    return (
        <UserContext.Provider value={{ isLoggedIn, handleLogin }}>
            <div className='app'>
                <Navbar />
                <Dashboard />
            </div>
        </UserContext.Provider>
    )
}

export default AuthApp