import { PrismaClient } from "@prisma/client";
import { userCreateDTO, userSignInDTO } from '../interfaces';
import bcrypt from "bcryptjs";
import { sc } from '../constants';

const prisma = new PrismaClient();

const createUser = async(userCreateDto: userCreateDTO) => {

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(userCreateDto.PW, salt); 

    const existsUser = await prisma.user
        .findFirst({
            where: {
                OR: [
                    {userID: userCreateDto.ID},
                    {nickname: userCreateDto.nickname}
                ]
            }
        })
    
    if (existsUser) return null;  //! 중복 아이디 또는 닉네임 존재 
    const data = await prisma.user
        .create({
            data: {
                userID: userCreateDto?.ID,
                userPw: password,
                nickname: userCreateDto?.nickname
            }
        });

    return data;
};


const signIn = async(userSignInDTO: userSignInDTO) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                userID: userSignInDTO.ID,
            },
        });
        if (!user) return null;

        const isMatch = await bcrypt.compare(userSignInDTO.PW, user.userPw);
        if (!isMatch) return sc.UNAUTHORIZED;
    
        return user.id;
    } 
    catch (error) {
        console.log(error);
        throw error;
    }
};


const userService = {
    createUser,
    signIn,
};

export default userService;