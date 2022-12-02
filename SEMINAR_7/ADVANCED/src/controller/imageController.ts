import { Request, Response } from "express";
import { rm, sc } from '../constants';
import { fail, success } from '../constants/response';
import { imageService } from '../service';


const createImage = async(req: Request, res: Response) => {
    const image: Express.MulterS3.File = req.file as Express.MulterS3.File;
    const { location } = image;
    const { productId } = req.body;

    if (!location) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_IMAGE));
    
    const data = await imageService.postImage(location as string, Number(productId));
    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.IMAGE_UPLOAD_FAIL));
    
    return res.status(sc.CREATED).send(success(sc.CREATED, rm.IMAGE_UPLOAD_SUCCESS, data));
};

const imageController = {
    createImage,
};

export default imageController;