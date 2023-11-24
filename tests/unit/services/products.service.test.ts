import { expect } from 'chai';
import sinon from 'sinon';
import productsService from '../../../src/service/products.service';
import productsMock from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it('Testa a função createProductService', async function () {

    const newProductMock = productsMock.newProduct;
    const newProduct = await productsService.createProductService(newProductMock);

    expect(newProduct).to.be.an('object');
  });

  it('Testa a função getAllProducts', async function () {

    const newProduct = await productsService.getAllProducts();

    expect(newProduct).to.be.an('array');
  });
});
