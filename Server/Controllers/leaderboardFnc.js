import leaderboard from "../Data/leaderboard.js"

export const sendLiveLeaderboard = (req, res) => {
    try {
        res.status(200).send(leaderboard);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Sending Data")
    }
}

export const updateLiveLeaderboard = (req, res) => {
    try {
        const data = req.body;
        leaderboard.splice(0, leaderboard.length, ...data);
        res.status(200).json({ message: "Updated Success" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: `Unable to update ${err}` })
    }
}