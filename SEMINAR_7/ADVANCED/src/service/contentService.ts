import { PrismaClient } from "@prisma/client";
import { Result } from 'express-validator';
import { contentCreateDTO, contentCreateReturnDTO } from '../interfaces';
const prisma = new PrismaClient();

const postContent = async(location: string, contentDTO: contentCreateDTO) => {
    console.log(contentDTO);
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

const searchContent = async(keyword: string, option: string[]) => {
    
    if (!option) {
        return await prisma.product.findMany({
            where: {
                title: {
                    contains: keyword
                },
            },
        });
    }

    const contentList = await prisma.product.findMany({
        where: {
            title: {
                contains: keyword
            },
            actor: {
                hasSome: option,
            }
        }
    });

    return contentList;
};


const contentService = {
    postContent,
    searchContent,
};

export default contentService;