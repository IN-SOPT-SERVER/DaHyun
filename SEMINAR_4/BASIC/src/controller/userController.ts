import { Request, Response } from "express";
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
  //const data = await userService.getUser();

};

//* [POST] 유저 생성
const createUser = async (req: Request, res: Response) => {

};

//* [UPDATE] 유저 수정
const updateUser = async (req: Request, res: Response) => {

};

//* [DELETE] 유저 삭제
const deleteUser = async (req: Request, res: Response) => {

};



const userController = {
  getUserById,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};

export default userController;
