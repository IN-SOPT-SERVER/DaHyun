import { PrismaClient } from "@prisma/client";
import { imageCreateDTO } from '../interfaces';
const prisma = new PrismaClient();

const postImage = async(location: string, productId: number) => {

    const image = await prisma.image.create({
        data: {
            image: location,
            productId,
        },
    });
    
    const result: imageCreateDTO = {
        id: image.id,
        image: image.image as string,
        productId: image.productId,
    };

    return result;
};

const imageService = {
    postImage,
};

export default imageService;