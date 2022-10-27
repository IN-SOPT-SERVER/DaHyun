import express, { Router } from "express";

const router: Router = express.Router();

router.use("/series", require("./seriesRouter"));      

module.exports = router;