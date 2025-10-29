import express from "express";
const router = express.Router();

router.get("/test", (req, res) => {
    res.send({ message: "From test router" })
})

export default router;