import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SendMailController } from './controllers/SendMailController';
import { SurveysController } from './controllers/SurveysController';
import { UserControler } from './controllers/UserController';

const router = Router();

const userControler = new UserControler();
const surveysControler = new SurveysController();

const sendMailController = new SendMailController();

const answerController = new AnswerController();

const npsController = new NpsController();

router.post('/users', userControler.create);
router.post('/surveys', surveysControler.create);
router.get('/show', surveysControler.show);

router.post('/sendMail', sendMailController.execute);

router.get('/answers/:value', answerController.execute);

router.get('/nps/:survey_id', npsController.execute);

export { router };
