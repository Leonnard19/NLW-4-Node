import { Router } from 'express';
import { SurveysController } from './controllers/SurveysController';
import { UserControler } from './controllers/UserController';

const router = Router();

const userControler = new UserControler();
const surveysControler = new SurveysController();

router.post('/users', userControler.create);
router.post('/surveys', surveysControler.create);
router.get('/show', surveysControler.show);

export { router };
