import { Router } from "express";
import { seriesController } from "../controller";
import { auth } from '../middlewares';

const router: Router = Router();

router.get('/:productId', auth, seriesController.getProduct);   //* 특정 작품 조회 
router.get('/:productId/:episodeId', auth, seriesController.getEpiUserInfo);  //* 유저가 작품의 특정 에피소드를 얼마나 봤는지 확인 위해

router.post('/isEvaluate/:productId', auth, seriesController.postEvaluation);  //* 싫어요(0) / 좋아요(1) / 최고예요(2)

router.patch('/toMyList/:productId', auth, seriesController.updateStartUserList);   //* 작품을 찜함 
router.patch('/episode/:episodeId', auth, seriesController.updateEpisode); //* 에피소드 정보 수정 
router.patch('/notMyList/:productId', auth, seriesController.deleteMyList);  //* 찜 취소


router.delete('/episode/:episodeId', auth, seriesController.deleteEpisode);  //* 에피소드 삭제 


export default router;