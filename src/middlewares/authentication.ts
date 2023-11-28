import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || 'xablau';

type TokenPayload = {
  id: number,
  username: string,
};

const sign = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, jwtSecret);
  return token;
};

const verify = (token: string): TokenPayload => {
  const decoded = jwt.verify(token, jwtSecret) as TokenPayload;
  return decoded;
};

export default {
  sign,
  verify,
};