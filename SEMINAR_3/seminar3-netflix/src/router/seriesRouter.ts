import express, { Router } from "express";
import { getSeries, postEvaluation, postMyList, deleteMyList } from "../controller/seriesController";

const router: Router = express.Router();

router.get('/:seriesId', getSeries);
router.post('/isEvaluate/:seriesId', postEvaluation);
router.post('/toMyList/:seriesId', postMyList);
router.delete('/notMyList/:seriesId', deleteMyList);

module.exports = router;