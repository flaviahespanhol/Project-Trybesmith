import {ProductInputtableTypes } from '../../src/database/models/product.model';
import { Product } from '../../src/types/Product';

const newProduct: ProductInputtableTypes = {
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 4,
  };

  const newProductFromDB: Product = {
    id: 6,
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 4
  }

export default {
    newProduct,
    newProductFromDB,
    };