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




const userController = {
  getUserById,
};

export default userController;
