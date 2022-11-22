import { Request, Response } from "express";
import { seriesService } from "../service";

//* 특정 작품 조회 
const getProduct = async(req: Request, res: Response) => {
    const { productId } = req.params;

    const data = await seriesService.getProductById(+productId);

    if (!data) return res.status(404).json({status: 404, message: "NOT FOUND"});
    return res.status(200).json({status: 200, message: "GET PRODUCT SUCCEED", data});
}

//* 유저가 작품의 특정 에피소드를 얼마나 봤는지 조회 
const getEpiUserInfo = async(req: Request, res: Response) => {
   const { userId, productId, episodeId } = req.params;

   const data = await seriesService.getEpiUser(+userId, +productId, +episodeId);

   if (!data ) return res.status(404).json({status: 404, message: "해당 회차를 조회하지 않음 "});
   return res.status(200).json({status: 200, message: "GET User's Episode info SUCCEED", data});
}


//* 작품 평가 (싫어요(0) / 좋아요(1) / 최고예요(2))
const postEvaluation = async(req: Request, res: Response) => {
   const { evalNum } = req.body;
   const { productId, userId } = req.params;
   
   if (!evalNum || ![0, 1, 2].includes(evalNum)) return res.status(400).json({status: 400, message: "evalNum 없음. postUser 생성 실패"});

   const data = await seriesService.createEvaluation(+productId, +userId, evalNum);
   return res.status(200).json({status: 200, message: "postUser 생성 성공", data});
}        

//* 작품을 찜함 
const updateStartUserList = async(req: Request, res: Response) => {
   const { userId, productId } = req.params;

   const productObj = await seriesService.getProductById(+productId);
   if (!productObj) return res.status(404).json({status: 404, message: "NOT FOUND"});
 
   productObj.starUserList.push(+userId);     //현재 찜한 유저들의 id 담긴 리스트에 userId 추가 
   
   const data = await seriesService.updateMyList(productObj.starUserList, +productId);
   return res.status(200).json({status: 200, message: "찜 리스트 추가 성공", data});
   
}

//* 찜 취소 
const deleteMyList = async(req: Request, res: Response) => {
   const { userId, productId } = req.params;

   const productObj = await seriesService.getProductById(+productId);
   if (!productObj) return res.status(404).json({status: 404, message: "NOT FOUND"});
   
   const idx = productObj.starUserList.indexOf(+userId);   //userId의 인덱스
   productObj.starUserList.splice(idx, 1);     //현재 찜한 유저들의 id 담긴 리스트에 userId 삭제
   //! splice(배열 변경 시작할 인덱스, 제거할 요소 수)

   const data = await seriesService.updateMyList(productObj.starUserList, +productId);
   return res.status(200).json({status: 200, message: "찜 리스트 삭제 성공", data});

}

//* 에피소드 수정 
const updateEpisode = async(req: Request, res: Response) => {
   const { episodeId } = req.params;
   const { plot, runningTime } = req.body;

   if (!plot || !runningTime) return res.status(400).json({status: 400, message: "PLOT / RUNNING-TIME 없음"})

   const data = await seriesService.updateEpi(+episodeId, plot, runningTime);
   return res.status(200).json({status: 200, message: "EPISODE 수정 성공", data});

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