import { Request, Response } from "express";
import { rm, sc } from '../constants';
import { fail, success } from '../constants/response';
import { seriesService } from "../service";

//* 특정 작품 조회 
const getProduct = async(req: Request, res: Response) => {
   const { productId } = req.params;

   const data = await seriesService.getProductById(+productId);

   if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_PRODUCT));
   return res.status(sc.OK).send(success(sc.OK, rm.GET_PRODUCT_SUCCESS, data));
}

//* 유저가 작품의 특정 에피소드를 얼마나 봤는지 조회 
const getEpiUserInfo = async(req: Request, res: Response) => {
   const { userId, productId, episodeId } = req.params;

   const data = await seriesService.getEpiUser(+userId, +productId, +episodeId);

   if (!data ) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.USER_NEVER_SEEN));
   return res.status(sc.OK).send(success(sc.OK, rm.GET_USER_EPISODE_INFO_SUCCESS, data));
}


//* 작품 평가 (싫어요(0) / 좋아요(1) / 최고예요(2))
const postEvaluation = async(req: Request, res: Response) => {
   const { evalNum } = req.body;
   const { productId, userId } = req.params;
   
   if (!evalNum || ![0, 1, 2].includes(evalNum)) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.USER_NEVER_EVALUATED));

   const data = await seriesService.createEvaluation(+productId, +userId, evalNum);
   return res.status(sc.OK).send(success(sc.OK, rm.POST_EVALUATION_SUCCESS, data));
}        

//* 작품을 찜함 
const updateStartUserList = async(req: Request, res: Response) => {
   const { userId, productId } = req.params;

   const productObj = await seriesService.getProductById(+productId);
   if(!productObj) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_PRODUCT));

   productObj?.starUserList.push(+userId);     //현재 찜한 유저들의 id 담긴 리스트에 userId 추가 
   
   const data = await seriesService.updateMyList(productObj?.starUserList, +productId);
   return res.status(sc.OK).send(success(sc.OK, rm.POST_LIKED_SUCCESS, data));
}

//* 찜 취소 
const deleteMyList = async(req: Request, res: Response) => {
   const { userId, productId } = req.params;

   const productObj = await seriesService.getProductById(+productId);
   if (!productObj) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_PRODUCT));
   
   const idx = productObj.starUserList.indexOf(+userId);   //userId의 인덱스
   productObj.starUserList.splice(idx, 1);     //현재 찜한 유저들의 id 담긴 리스트에 userId 삭제
   //! splice(배열 변경 시작할 인덱스, 제거할 요소 수)

   const data = await seriesService.updateMyList(productObj.starUserList, +productId);
   return res.status(sc.OK).send(success(sc.OK, rm.POST_UNDO_LIKED_SUCCESS, data));
}

//* 에피소드 수정 
const updateEpisode = async(req: Request, res: Response) => {
   const { episodeId } = req.params;
   const { plot, runningTime } = req.body;

   if (!plot || !runningTime) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_PLOT_OR_RUNNINGTIME));

   const data = await seriesService.updateEpi(+episodeId, plot, runningTime);
   return res.status(sc.OK).send(success(sc.OK, rm.UPDATE_EPISODE_SUCCESS, data));

}



//* 에피소드 삭제 
const deleteEpisode = async(req: Request, res: Response) => {
   const { episodeId } = req.params
   await seriesService.deleteEpi(+episodeId);

   return res.status(200).json({status:200, message: "EPISODE 삭제 성공"});
}


const seriesController = {
   getProduct, 
   getEpiUserInfo, 
   postEvaluation, 
   updateStartUserList, 
   deleteMyList, 
   updateEpisode, 
   deleteEpisode,
};

export default seriesController;