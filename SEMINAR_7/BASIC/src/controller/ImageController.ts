import { Request, Response } from "express";
import { sc, rm } from "../constants";
import { fail, success } from "../constants/response";
import { imageService } from "../service";


const uploadImage = async(req: Request, res: Response) => {

    const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
    const { location } = image;

    if (!location) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_IMAGE));
    
    const data = await imageService.postImage(location);
    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.IMAGE_UPLOAD_FAIL));
    
    return res.status(sc.CREATED).send(success(sc.CREATED, rm.IMAGE_UPLOAD_SUCCESS, data));
};


const imageController = {
    uploadImage,
};

export default imageController;