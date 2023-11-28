import { Request, Response } from 'express';
import loginService from '../service/login.service';

const loginController = async (req: Request, res: Response): Promise<Response> => {
  const userToken = await loginService(req.body);

  if (!userToken) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }

  return res.status(200).json({ token: { userToken } });
};

export default loginController;