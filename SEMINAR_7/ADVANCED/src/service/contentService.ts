import { PrismaClient } from "@prisma/client";
import { Result } from 'express-validator';
import { contentCreateDTO, contentCreateReturnDTO, searchContentDTO } from '../interfaces';
const prisma = new PrismaClient();

const postContent = async(location: string, contentDTO: contentCreateDTO) => {

    const content = await prisma.product.create({
        data: {
            title: contentDTO.title,
            actor: contentDTO.actor,
            genre: contentDTO.genre,
            feature: contentDTO.feature,
            releasedYear: Number(contentDTO.releasedYear),
            ageLimit: Number(contentDTO.ageLimit),
            Image: {
                create: {
                    image: location,
                }
            }
        },
        include: {
            Image: true,
        },
    });

    const result: contentCreateReturnDTO = {
        contentId: content.id,
        image: content.Image,
    }

    return result;
};

const searchContent = async(searchDTO: searchContentDTO) => {
    const page = Number(searchDTO.page);
    const limit = Number(searchDTO.limit);

    //! option = []인 경우 
    if (!searchDTO.option) {
        return await prisma.product.findMany({
            where: {
                title: {
                    contains: searchDTO.keyword
                },
            },
        });
    }

    //! option = ['배우1', '배우2'] 같은 경우 
    const contentList = await prisma.product.findMany({
        where: {
            title: {
                contains: searchDTO.keyword
            },
            actor: {
                hasSome: searchDTO.option,
            }
        },
        skip: (page-1)*limit,
        take: limit,
        select: {
            id: true,
            title: true,
            actor: true,
        },
    });

    return contentList;
};


const contentService = {
    postContent,
    searchContent,
};

export default contentService;

