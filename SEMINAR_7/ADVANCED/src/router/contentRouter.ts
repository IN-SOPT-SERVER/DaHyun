import { Router } from "express";
import { contentController } from '../controller';
import { upload } from '../middlewares';

const router: Router = Router();

router.post('/', upload.single('file'), contentController.createContent);
router.get('/search', contentController.searchContent);

export default router;