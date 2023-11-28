import { Router } from 'express';
import loginController from '../controller/login.controller';
import loginValidation from '../middlewares/login.validation';

const loginRouter = Router();

loginRouter.post('/', loginValidation, loginController);

export default loginRouter;