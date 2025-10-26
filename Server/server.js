import express from "express";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Running Backend: PORT 5000");
})

app.get("/test", (req, res) => {
    res.json({ message: "Message from test API" })
})