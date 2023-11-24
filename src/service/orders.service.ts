import OrderModel from '../database/models/order.model';
import ProductsService from './products.service';
import { Order } from '../types/Order';

const getAllOrders = async (): Promise<Order[]> => {
  const allOrders = await OrderModel.findAll();
  
  const allOrdersWithProductIds = await Promise.all(allOrders.map(async ({ dataValues }) => {
    const allProductIds = await ProductsService.getProductsIdByOrderId(dataValues.id);
    return {
      ...dataValues,
      productIds: allProductIds,
    };
  }));
  
  return allOrdersWithProductIds;
};

export default {
  getAllOrders,
};