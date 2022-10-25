import express, {Request, Response, Router} from "express";
import Movie from "./interface/Movie";
import Comment from "./interface/Comment";

const router: Router = express.Router();

const commentData: Comment[] = [
    {
        title: "시간 가는줄 모르고 봤어요~",
        author: {
            name: "혠이",
            age: 20,
        },
        date: new Date().toLocaleDateString(),
    },
    {
        title: "마블팬이면 좋아할 영화",
        author: {
            name: "땡이",
            age: 23
        },
        date: new Date().toLocaleDateString(),
    }
]
const movie: Movie = {
    title: "닥터 스트레인지: 대혼돈의 멀티버스",
    performer: ['베네딕트 컴버배치','엘리자베스 올슨'],
    starRating: 7.77,
    comments: commentData,
}


router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: "영화 조회 성공",
        data: movie,
    });
});

module.exports = router;