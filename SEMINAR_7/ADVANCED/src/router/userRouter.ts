import { Router } from "express";
import { body } from "express-validator";
import { userController } from '../controller';

const router: Router = Router();

router.post(
    '/signup',
    [body("ID").notEmpty(), body("PW").notEmpty().isLength({ min: 6 }), body("nickname").notEmpty()],
    userController.createUser
);


router.post(
    "/signin",
    [
        body("ID").notEmpty(),
        body("PW").notEmpty(),
        body("PW").isLength({ min: 6 }),
    ],
    userController.signInUser
);

export default router;