import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const optionDict: {[key: string]: object} = {
    "desc": {
        createdAt: "desc",
    },
    "asc": {
        createdAt: "asc",
    },
    "nameDesc": {
        userName: "desc",
    },
}

const getByKeywordOption = async(keyword: string, option: string) => {

    const data = await prisma.user
        .findMany({
            where: {
                userName: {
                    contains: keyword
                },
            },
            orderBy: optionDict[option],
        });
    
        return data;
};


const searchService = {
    getByKeywordOption,
};

export default searchService;