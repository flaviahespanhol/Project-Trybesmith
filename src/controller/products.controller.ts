import { Request, Response } from 'express';
import ProductsService from '../service/products.service';

const createProductController = async (req: Request, res: Response): Promise<Response | void> => {
  const newProduct = await ProductsService.createProductService(req.body);
  return res.status(201).json(newProduct);
};

export default {
  createProductController };
