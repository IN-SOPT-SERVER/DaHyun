import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

//* 특정 유저 조회 - [GET] api/user/:userId
router.get("/:userId", userController.getUserById);


export default router;
