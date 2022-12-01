import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { rm, sc } from '../constants';
import { fail, success } from '../constants/response';
import { userCreateDTO, userSignInDTO } from '../interfaces';
import jwtHandler from '../modules/jwtHandler';
import { userService } from '../service';


//! 회원가입
const createUser = async(req: Request, res: Response) => {

    const error = validationResult(req);
    if(!error.isEmpty()) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL));

    const userCreateDto: userCreateDTO = req.body;
    const data = await userService.createUser(userCreateDto);

    if (!data) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.ALREADY_ID_OR_NICKNAME));

    const accessToken = jwtHandler.sign(data.id);
    const result = {
        id: data.id,
        name: data.nickname,
        accessToken,
    };
    
    return res.status(sc.CREATED).send(success(sc.CREATED, rm.SIGNUP_SUCCESS, result))
};


//! 로그인
const signInUser = async(req: Request, res: Response) => {

    const error = validationResult(req);
    if (!error.isEmpty()) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SIGNIN_FAIL));

    const userSignInDto: userSignInDTO = req.body;

    
    try {
        const userId = await userService.signIn(userSignInDto);
    
        if (!userId) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_USER));
        else if (userId === sc.UNAUTHORIZED)
            return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, rm.INVALID_PASSWORD));
        
        const accessToken = jwtHandler.sign(userId);
    
        const result = {
            id: userId,
            accessToken,
        };
    
        res.status(sc.OK).send(success(sc.OK, rm.SIGNIN_SUCCESS, result));
    } catch (e) {
        console.log(error);
        res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
    }
};



const userController = {
    createUser,
    signInUser,
};

export default userController;