import leaderboard from "../Data/leaderboard.js"

export const sendLiveLeaderboard = (req, res) => {
    try {
        res.status(200).send(leaderboard);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error Sending Data")
    }
}