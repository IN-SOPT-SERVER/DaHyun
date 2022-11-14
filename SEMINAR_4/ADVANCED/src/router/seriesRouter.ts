import { Router } from "express";
import { seriesController } from "../controller";

const router: Router = Router();

router.get('/:productId', seriesController.getProduct);   //* 특정 작품 조회 
router.get('/:userId/:productId/:episodeId', seriesController.getEpiUserInfo);  //* 유저가 작품의 특정 에피소드를 얼마나 봤는지 확인 위해

router.post('/isEvaluate/:userId/:productId', seriesController.postEvaluation);  //* 싫어요(0) / 좋아요(1) / 최고예요(2)

router.patch('/toMyList/:userId/:productId', seriesController.updateStartUserList);   //* 작품을 찜함 
router.patch('/episode/:episodeId', seriesController.updateEpisode); //* 에피소드 정보 수정 
router.patch('/notMyList/:userId/:productId', seriesController.deleteMyList);  //* 찜 취소


router.delete('/episode/:episodeId', seriesController.deleteEpisode);  //* 에피소드 삭제 


export default router;