import express, { Request, Response, Router } from "express";
import User from "./interface/User";
import Comment from "./interface/Comment";

const router: Router = express.Router();

const user: User = {
  name: "김다현",
  age: 24,
}

const comment: Comment = {
    title: "믿고보는 마블, 톰홀랜드 개기여웡",
    author: user,
    date: new Date().toLocaleDateString(),
}


router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "댓글 조회 성공",
    data: comment,
  });

});

module.exports = router;