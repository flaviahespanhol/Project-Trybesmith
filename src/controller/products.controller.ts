import { Request, Response } from 'express';
import ProductsService from '../service/products.service';

const createProductController = async (req: Request, res: Response): Promise<Response | void> => {
  const newProduct = await ProductsService.createProductService(req.body);
  
  return res.status(201).json(newProduct);
};

const listAllProducts = async (req: Request, res: Response): Promise<Response | void> => {
  const allProducts = await ProductsService.getAllProducts();

  return res.status(200).json(allProducts);
};

const listProductsIdByOrderId = async (req: Request, res: Response): Promise<Response | void> => {
  const { orderId } = req.params;
  const productsId = await ProductsService.getProductsIdByOrderId(Number(orderId));

  return res.status(200).json(productsId);
};

export default {
  createProductController,
  listAllProducts,
  listProductsIdByOrderId };
