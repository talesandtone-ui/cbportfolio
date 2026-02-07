const MockModel = require('../utils/MockModel');

class MockLead extends MockModel {
    constructor() {
        super('Lead');
        // Seed Leads
        this.create({
            name: 'John Doe',
            email: 'john@example.com',
            phone: '1234567890',
            message: 'Interested in website development',
            status: 'new',
            createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
        });
        this.create({
            name: 'Sarah Smith',
            email: 'sarah@example.com',
            phone: '9876543210',
            message: 'Need a price quote for SEO',
            status: 'contacted',
            createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)
        });
        this.create({
            name: 'Tech Corp',
            email: 'contact@techcorp.com',
            phone: '5551234567',
            message: 'Full branding package',
            status: 'converted',
            createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)
        });
    }
}

const leadModel = new MockLead();

module.exports = {
    create: (data) => leadModel.create(data),
    find: (query) => leadModel.find(query),
    findById: (id) => leadModel.findById(id),
    findByIdAndUpdate: async (id, update) => {
        let doc = leadModel.data.find(d => d._id === id);
        if (doc) {
            Object.assign(doc, update);
            if (update.$set) Object.assign(doc, update.$set);
            return doc;
        }
        return null;
    },
    findByIdAndDelete: async (id) => {
        const idx = leadModel.data.findIndex(d => d._id === id);
        if (idx > -1) {
            return leadModel.data.splice(idx, 1)[0];
        }
        return null;
    },
    countDocuments: (query) => leadModel.countDocuments(query)
};
