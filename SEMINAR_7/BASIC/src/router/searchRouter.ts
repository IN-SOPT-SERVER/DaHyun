import { Router } from "express";
import { searchController } from '../controller';

const router: Router = Router();

//* 이름으로 유저 검색 - [GET] api/user/search?keyword={}&option={}
router.get('/', searchController.searchUserByName); 

export default router;


