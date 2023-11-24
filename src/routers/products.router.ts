import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.createProductController);
productsRouter.get('/', productsController.listAllProducts);
productsRouter.get('/:orderId', productsController.listProductsIdByOrderId);

export default productsRouter;