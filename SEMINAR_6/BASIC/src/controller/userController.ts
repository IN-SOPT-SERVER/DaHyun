import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
import { UserSignInDTO } from "../interfaces/UserSignInDTO";
import jwtHandler from "../modules/jwtHandler";
import { userService } from "../service";


//* [GET] 특정 유저 조회
const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);   //!   ===   userService.getUserById(Number(userId))
  
  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

//* [GET] 전체 유저 조회
const getUser = async (req: Request, res: Response) => {
  const data = await userService.getUser();
  return res.status(200).json({ status: 200, message: "전체 유저 조회 성공", data});
};

//* 로그인
const signInUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const userSignInDto: UserSignInDTO = req.body;

  try {
    const userId = await userService.signIn(userSignInDto);

    if (!userId) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
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
    //? 서버 내부에서 오류 발생
    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* [POST] 유저 생성 (회원가입)
const createUser = async (req: Request, res: Response) => {

  //? validation의 결과를 바탕으로 분기 처리
  const error = validationResult(req);
  if(!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST))
  }
  
  //? 기존 비구조화 할당 방식 -> DTO의 형태
  const userCreateDto: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDto);

  if (!data) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL))
  }

  const accessToken = jwtHandler.sign(data.id);

  const result = {
    id: data.id,
    name: data.userName,
    accessToken,
  };

  return res.status(sc.CREATED).send(success(sc.CREATED, rm.SIGNUP_SUCCESS, result))
};

//* [UPDATE] 유저 수정
const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { email } = req.body;
  
  if (!email) return res.status(400).json({status: 400, message: "유저 수정 실패"});
  const data = await userService.updateUser(Number(userId), email);
  return res.status(200).json({status: 200, message: "유저 수정 성공", data});

};

//* [DELETE] 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  await userService.deleteUser(+userId);

  return res.status(200).json({status: 200, message: "유저 삭제 성공"});
};



const userController = {
  getUserById,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  signInUser,
};

export default userController;
