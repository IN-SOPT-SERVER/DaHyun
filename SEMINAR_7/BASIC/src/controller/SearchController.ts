import { Request, Response } from "express";
import { sc, rm } from "../constants";
import { fail, success } from "../constants/response";
import searchService from '../service/SearchService';


//* [GET] ~/api/user?keyword=어쩌구&option=저쩌구 
const searchUserByName = async (req: Request, res: Response) => {
    const { keyword, option } = req.query;

    const data = await searchService.getByKeywordOption(keyword as string, option as string);
    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SEARCH_USER_FAIL));

    return res.status(sc.OK).send(success(sc.OK, rm.SEARCH_USER_SUCCESS, data));
};

const serachController = {
    searchUserByName,
};

export default serachController;