import { Router } from "express";
import userRouter from "./userRouter";
import imageRouter from "./ImageRouter";
import searchRouter from "./searchRouter";

const router: Router = Router();


router.use("/search", searchRouter);
router.use("/user", userRouter);
router.use("/image", imageRouter);

export default router;
