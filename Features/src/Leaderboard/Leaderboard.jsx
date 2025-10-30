import React, { useEffect, useState } from 'react'
import "../Leaderboard/style.css"

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

    const handleSave = async () => {
        const res = await fetch("http://localhost:5000/updateScore", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(leaderboard)
        })
        const data = await res.json();
        if (res.ok) {
            alert(`Response from backend ${data.message}`);
        } else {
            alert(`Error: ${data.message}`)
        }
    }

    const handleScoreChange = (name, value) => {
        const newObj = leaderboard.map((item) => {
            if (item.name == name) {
                item.score = value;
            }
            return item;
        })

        setLeaderboard(newObj)
        console.log(leaderboard)
    }

    return (
        <div className='main-div'>
            {leaderboard.map((data, index) => {
                return <div style={{ display: "flex", padding: "4px" }} key={index}>
                    <div>{data.name}</div>
                    <input type='text' value={data.score} onChange={(e) => handleScoreChange(data.name, e.target.value)}></input>
                </div>
            })}
            <button onClick={handleSave}>Save Details</button>
        </div>
    )
}

export default Leaderboard