import { Router } from "express";
import seriesRouter from "./seriesRouter";

const router: Router = Router();

router.use("/series", seriesRouter);      

export default router;
