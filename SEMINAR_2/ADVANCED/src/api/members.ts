import express, {Request, Response, Router} from "express";
import Member from "./interface/member";

const router: Router = express.Router();

const members: Member[] = [
    {
        info: {
            name: "권세훈",
            age: 24,
        },
        group: "OB",
    },
    {
        info: {
            name: "박현정",
            age: 24,
        },
        group: "YB",
    },
    {
        info: {
            name: "김동재",
            age: 23,
        },
        group: "OB",
    },
]

router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
        status: 200,
        message: "멤버 조회 성공",
        data: members,
    });
});

module.exports = router;