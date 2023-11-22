import { Model } from 'sequelize';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

const createProductService = async (product: ProductInputtableTypes): Promise<Product> => {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
};

const getAllProducts = async (): Promise<Model<ProductInputtableTypes>[]> => {
  const allProducts = await ProductModel.findAll();

  return allProducts;
};

export default {
  createProductService,
  getAllProducts,
};