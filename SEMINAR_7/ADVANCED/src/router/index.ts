import { Router } from "express";
import imageRouter from './imageRouter';
import contentRouter from './contentRouter';
import seriesRouter from './seriesRouter';
import userRouter from './userRouter';

const router: Router = Router();

router.use('/image', imageRouter);    //! 이미지만 따로 업로드하는 경우 
router.use('/content', contentRouter);  //! 이미지랑 함께 컨텐츠 생성 
router.use('/series', seriesRouter);    
router.use('/user', userRouter);

export default router;
