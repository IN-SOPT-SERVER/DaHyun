// src/api/index.ts

import express, { Router } from "express";

const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!


router.use("/user", require("./user"));            // localhost:3000/api/user
router.use("/blog", require("./blog"));            // localhost:3000/api/blog
router.use("/comment", require("./comment"));      // localhost:3000/api/comment
router.use("/movie", require("./movie"));          // localhost:3000/api/movie
router.use("/members", require("./members"));      // localhost:3000/api/members


module.exports = router; // 모듈로 반환