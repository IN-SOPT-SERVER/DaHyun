import { Router } from "express";
import seriesRouter from './seriesRouter';
import userRouter from './userRouter';

const router: Router = Router();

router.use('/series', seriesRouter);    
router.use('/user', userRouter);

export default router;
