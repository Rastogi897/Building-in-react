import express from "express";
import cors from "cors"
import router from "./Routes/testRoutes.js";
import leaderBoardRoute from "./Routes/leaderBoardRoute.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// HTTP Routes
app.use("/", router)
app.use("/", leaderBoardRoute)

app.listen(PORT, () => {
    console.log("Running Backend: PORT 5000");
})

app.get("/live", (req, res) => {
    res.json({ message: "The server is LIVE" })
})