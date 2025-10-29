import React, { useEffect, useState } from 'react'

const Leaderboard = () => {
    const [error, setError] = useState("")
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:5000/liveScore");
                const data = await res.json();
                setLeaderboard(data);
            } catch (err) {
                setError("Error getting response");
                console.error(err);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {leaderboard.map((data, index) => {
                return <div style={{ display: "flex" }} key={index}>
                    <div>{data.name}</div>
                    <div>{data.score}</div>
                </div>
            })}
        </div>
    )
}

export default Leaderboard