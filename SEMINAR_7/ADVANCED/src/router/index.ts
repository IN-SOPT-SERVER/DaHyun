import { Router } from "express";
import imageRouter from './imageRouter';
import seriesRouter from './seriesRouter';
import userRouter from './userRouter';

const router: Router = Router();

router.use('/image', imageRouter);
router.use('/series', seriesRouter);    
router.use('/user', userRouter);

export default router;
