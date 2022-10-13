import express, { Request, Response, Router } from "express";
import User from "./interface/User";


const router: Router = express.Router();

const user: User = {
  name: "김다현",
  age: 24,
}


router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    user: user,
  });

});

module.exports = router;