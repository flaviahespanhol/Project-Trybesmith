import Sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import ordersMock from '../../mocks/orders.mock';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { Sinon.restore(); });

  it('Lista todos os pedidos', async function () {

    const allOrders = ordersMock.allOrdersFromDB.map(order => OrderModel.build(order));

    Sinon.stub(OrderModel, 'findAll').resolves(allOrders);

    const listAllOrders = await chai.request(app).get('/orders');

    expect(listAllOrders.status).to.be.equal(200);
    expect(listAllOrders.body).to.be.an('array');
    expect(listAllOrders.body).to.be.deep.equal(ordersMock.allOrdersFromDB);
  });

});
