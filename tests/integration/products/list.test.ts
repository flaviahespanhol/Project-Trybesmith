import Sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { Sinon.restore(); });

  it('Lista todos os produtos', async function () {

    const allProducts = productsMock.allProductsFromDB.map(product => ProductModel.build(product));

    Sinon.stub(ProductModel, 'findAll').resolves(allProducts);

    const listAllProducts = await chai.request(app).get('/products');

    expect(listAllProducts.status).to.be.equal(200);
    expect(listAllProducts.body).to.be.an('array');
    expect(listAllProducts.body).to.be.deep.equal(productsMock.allProductsFromDB);
  });

});
