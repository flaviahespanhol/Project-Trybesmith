import chai, { expect } from 'chai';
import Sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsMock from '../../mocks/products.mock';
import productsController from '../../../src/controller/products.controller'
import productsService from '../../../src/service/products.service'


chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = Sinon.stub().returns(res);
    res.json = Sinon.stub().returns(res);
    Sinon.restore();
  });

  it('Cria-se um produto com sucesso', async function () {
    req.body = productsMock.newProduct;
    const serviceResponse = productsMock.newProductFromDB;
  
    Sinon.stub(productsService, 'createProductService').resolves(serviceResponse);

    await productsController.createProductController(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(serviceResponse);

});
});
