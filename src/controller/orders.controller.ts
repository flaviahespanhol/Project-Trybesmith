import { Request, Response } from 'express';
import ordersService from '../service/orders.service';

const listAllOrders = async (req: Request, res: Response): Promise<Response | void> => {
  const allOrders = await ordersService.getAllOrders();
  return res.status(200).json(allOrders);
};

export default {
  listAllOrders,
};