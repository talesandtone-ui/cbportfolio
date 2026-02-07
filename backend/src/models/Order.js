const MockModel = require('../utils/MockModel');

class MockOrder extends MockModel {
    constructor() {
        super('Order');
        // Seed Orders
        this.create({
            user: '2',
            service: 'Web Development Premium',
            amount: 75000,
            status: 'completed',
            paymentStatus: 'paid',
            createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
        });
    }
}

const orderModel = new MockOrder();

module.exports = {
    create: (data) => orderModel.create(data),
    find: (query) => orderModel.find(query),
    findById: (id) => orderModel.findById(id),
    countDocuments: (query) => orderModel.countDocuments(query)
};
