import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();

productsRouter.post('/', productsController.createProductController);

export default productsRouter;