import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

//* 특정 유저 조회 - [GET] api/user/:userId
router.get("/:userId", userController.getUserById);
//* 전체 유저 조회 - [GET] api/user/
router.get("/", userController.getUser);
//* 유저 생성 - [POST] api/user/
router.post("/", userController.createUser);
//* 유저 수정 - [PATCH] api/user/:userId
router.patch("/:uesrId", userController.updateUser);
//* 유저 삭제 - [DELETE] api/user/:uesrId
router.delete("/:userId", userController.deleteUser);

export default router;
