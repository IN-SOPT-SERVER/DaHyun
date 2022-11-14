import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getProductById = async (productId: number) => {
    const data = await prisma.product.findUnique({
        where: {
            id: productId,
        },
    });

    return data;
};

const getEpiUser = async (userId: number, productId: number, episodeId: number) => {
    const data = await prisma.episodeUser.findFirst({
        where: {
            id: episodeId,
            productId: productId,
            userId: userId
        },
    });
    
    return data;
};

const createEvaluation = async(productId: number, userId: number, evalNum: number) => {
    const data = await prisma.productUser.create({
        data: {
            productId: productId,
            userId: userId,
            evalNum: evalNum
          },
    })

    return data;
}; 


const updateMyList = async(userList: number[], productId: number) => {
    const data = await prisma.product.update({
        where: {
            id: productId
        },
        data: {
            starUserList: userList
        }
    })

    return data;
} 

const updateEpi = async(epiId: number, plot: string, runningTime:number) => {
    const episode = await prisma.episode.update({
        where: {
            id: epiId,
        },
        data: {
            plot,
            runningTime
        },
    })
}


const deleteEpi = async(epiId: number) => {
    await prisma.episode.delete({
        where: {
            id: epiId
        }
    })
}



const seriesService = {
    getProductById,
    getEpiUser,
    createEvaluation,
    updateMyList,
    updateEpi,
    deleteEpi,
};

export default seriesService;