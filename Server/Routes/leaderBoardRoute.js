import express from "express"
const LeaderboardRouter = express.Router();
import { sendLiveLeaderboard } from "../Controllers/leaderboardFnc.js";

LeaderboardRouter.get("/liveScore", sendLiveLeaderboard);

export default LeaderboardRouter;