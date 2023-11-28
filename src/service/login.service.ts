import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { Login } from '../types/Login';
import jwt from '../middlewares/authentication';

const loginService = async (login: Login): Promise<string | null> => {
  const user = await UserModel.findOne({ where: { username: login.username } });

  if (!user || !bcrypt.compareSync(login.password, user.dataValues.password)) {
    return null;
  }

  const { id, username } = user.dataValues;
  const userToken = jwt.sign({ id, username });
  
  return userToken;
};

export default loginService;