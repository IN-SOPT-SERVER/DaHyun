import express, {Request, Response, Router} from "express";
import Blog from "./interface/Blog";
import User from "./interface/User";
import Comment from "./interface/Comment";

const router: Router = express.Router();

const userData: User[] = [
    {
        name: "다뇽",
        age: 24,
    },
    {
        name: "무니",
        age: 24,
    },
    {
        name: "밍밍",
        age: 24,
    }
]

const commentData: Comment[] = [
    {
        title: "저두 담엔 같이 가여~",
        author: userData[1],
        date: new Date().toLocaleDateString(),
    },
    {
        title: "글 너무 잘 보고 있어요!",
        author: userData[2],
        date: new Date().toLocaleDateString(),
    }
]

const blog: Blog = {
    title: "안늉앙녕",
    writer: userData[0],
    content: "[타오마라탕] 홍대 마라탕 맛집 후기 | 소세지가 도라이임",
    comments: commentData,
}


router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: "블로그 조회 성공",
        data: blog,
    });
});

module.exports = router;