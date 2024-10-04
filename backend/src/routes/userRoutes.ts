import { Router } from 'express';
import { getUsersAll, getStudentByID, createUser } from '../controllers/UserController';

const router = Router();

router.get('/', getUsersAll);
router.get('/student/:studentId', getStudentByID);
router.post('/', createUser);

export default router;
