import { Request, Response } from "express";
import { rm, sc } from '../constants';
import { fail, success } from '../constants/response';
import { contentCreateDTO, contentCreateReturnDTO } from '../interfaces';
import { contentService } from '../service';

const createContent = async(req: Request, res: Response) => {
    const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
    const { location } = image;
    const contentDTO:contentCreateDTO = req.body;

    if (!location) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_IMAGE));
    
    const data = await contentService.postContent(location as string, contentDTO);
    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.IMAGE_UPLOAD_FAIL));
    
    return res.status(sc.CREATED).send(success(sc.CREATED, rm.IMAGE_UPLOAD_SUCCESS, data));
};

const contentController = {
    createContent,
};

export default contentController;