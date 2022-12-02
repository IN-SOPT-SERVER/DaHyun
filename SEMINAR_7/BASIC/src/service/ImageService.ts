import { create } from 'domain';
import { PrismaClient } from "@prisma/client";
import { ImageUploadDTO } from '../interfaces/image/ImageUploadDTO';


const prisma = new PrismaClient();

const postImage = async(location: string): Promise<ImageUploadDTO> => {
    const image = await prisma.image.create({
        data: {
            image: location
        }
    });

    const result: ImageUploadDTO = {
        id: image.id,
        image: image.image as string,
    };

    return result;
};


const imageService = {
    postImage,
};

export default imageService;