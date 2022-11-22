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
  const data = await userService.getUser();
  return res.status(200).json({ status: 200, message: "전체 유저 조회 성공", data});
};

//* [POST] 유저 생성
const createUser = async (req: Request, res: Response) => {
  const { userId, email, age } = req.body;
  if (!userId || !email || !age) return res.status(400).json({status: 400, message: "유저 생성 실패"});

  const data = await userService.createUser(userId, email, age);
  return res.status(200).json({status: 200, message: "유저 생성 성공", data});

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
};

export default userController;
