import React, { useContext } from 'react'
import { UserContext } from './AuthApp'

const Navbar = () => {
    const { isLoggedIn, handleLogin } = useContext(UserContext)
    return (
        <nav>
            <h1>App</h1>
            <span>{isLoggedIn ? "Welcome, User!" : ""}</span>
            <button onClick={handleLogin}>{isLoggedIn ? "Loggout" : "Login"}</button>
        </nav>
    )
}

export default Navbar