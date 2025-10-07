import React, { useContext } from 'react'
import { UserContext } from './AuthApp'

const Dashboard = () => {
    const { isLoggedIn, handleLogin } = useContext(UserContext)

    return (
        <div className='dashboard'>
            <h2>{!isLoggedIn ? "Please login to access your dashboard." : "This is your dashboard."}</h2>
        </div>
    )
}

export default Dashboard