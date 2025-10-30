import express from "express"
const LeaderboardRouter = express.Router();
import { sendLiveLeaderboard, updateLiveLeaderboard } from "../Controllers/leaderboardFnc.js";

LeaderboardRouter.get("/liveScore", sendLiveLeaderboard);
LeaderboardRouter.post("/updateScore", updateLiveLeaderboard)

export default LeaderboardRouter;