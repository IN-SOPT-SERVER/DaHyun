import { Router } from "express";
import userRouter from "./userRouter";
import imageRouter from "./ImageRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/image", imageRouter);

export default router;
