import { Request, Response } from "express";
import { getSeriesData, postEvaluateData, postMyListData, deleteMyListData } from "../service/seriesService";


const getSeries = async(req: Request, res: Response) => {
    const seriesId = req.params.seriesId;
    const obj = JSON.parse(JSON.stringify(await getSeriesData(seriesId)));
    if (!obj) {
        return res.status(404).json({
            status: 404,
            message: `SeriesId : ${seriesId} NOT FOUND`,
        });
    }
    return res.status(200).json({
        status: 200,
        message: `Get seriesId:${seriesId} succeed`,
        data: obj.info,    
    })
}


const postEvaluation =  async(req: Request, res: Response) => {
     
    const seriesId = req.params.seriesId;
    const evalNum = req.body.evalNum;  // 0->맘에 안들어요, 1-> 좋아요, 2->최고예요! 

    if (![0, 1, 2].includes(evalNum)) { 
        return res.status(400).json({
            status: 400,
            message: `Invalid evalNum : ${evalNum}`
        })
    }

    const obj = await postEvaluateData(seriesId, evalNum);

    if (!obj) {
        return res.status(404).json({
            status: 404,
            message: `SeriesId : ${seriesId} NOT FOUND`
        })
    } 
    return res.status(200).json({
        status: 200,
        message: `Evaluated Success to ${obj.userInfo.evalNum}`
    })

    }

const postMyList = async(req: Request, res: Response) => {
    const seriesId = req.params.seriesId;
    const obj = await postMyListData(seriesId);

    if(!obj) {
        return res.status(404).json({
            status: 404,
            message: `SeriesId : ${seriesId} NOT FOUND`
        })
    }

    return res.status(200).json({
        status: 200,
        message: `POST myList Success to ${obj.userInfo.toMyList}`
    })


}

const deleteMyList = async(req: Request, res: Response) => {
    const seriesId = req.params.seriesId;
    const obj = await deleteMyListData(seriesId);
  
    if(!obj) {
        return res.status(404).json({
            status: 404,
            message: `SeriesId : ${seriesId} NOT FOUND`
        })
    }

    return res.status(200).json({
        status: 200,
        message: `DELETE myList Success to ${obj.userInfo.toMyList}`
    })
}

export {
    getSeries,
    postEvaluation,
    postMyList,
    deleteMyList
}