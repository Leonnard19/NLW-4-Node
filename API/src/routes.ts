import { Router } from 'express';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserControler } from './controllers/UserController';

const router = Router();

const userControler = new UserControler();
const surveysControler = new SurveysController();

const sendMailController = new SendMailController();

router.post('/users', userControler.create);
router.post('/surveys', surveysControler.create);
router.get('/show', surveysControler.show);

router.post('/sendMail', sendMailController.execute);

export { router };
