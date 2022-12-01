import { Router } from "express";
import { body } from "express-validator";
import { userController } from "../controller";
import { auth } from "../middlewares";

const router: Router = Router();

//* 특정 유저 조회 - [GET] /user/:userId
router.get("/:userId", auth, userController.getUserById);
//* 전체 유저 조회 - [GET] /user/
router.get("/", auth, userController.getUser);
//* 로그인 - [POST] /user/signin
router.post(
    "/signin",
    [
      body("email").notEmpty(),
      body("email").isEmail(),
      body("password").notEmpty(),
      body("password").isLength({ min: 6 }),
    ],
    userController.signInUser
  );
//* 유저 생성 - [POST] /user/
router.post(
    "/", 
    [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser);
//* 유저 수정 - [PATCH] /user/:userId
router.patch("/update", auth, userController.updateUser);
//* 유저 삭제 - [DELETE] /user/:uesrId
router.delete("/:userId", auth, userController.deleteUser);

export default router;
