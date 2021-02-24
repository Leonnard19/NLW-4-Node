import { Router } from 'express';
import { UserControler } from './controllers/UserController';

const router = Router();

const userControler = new UserControler();

router.post('/users', userControler.create);

export { router };
