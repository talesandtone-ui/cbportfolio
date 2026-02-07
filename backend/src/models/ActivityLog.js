const MockModel = require('../utils/MockModel');

class MockActivityLog extends MockModel {
    constructor() {
        super('ActivityLog');
        this.create({
            user: '1',
            action: 'Logged In',
            details: 'Admin login successful',
            timestamp: new Date()
        });
    }
}

const activityLogModel = new MockActivityLog();

module.exports = {
    create: (data) => activityLogModel.create(data),
    find: (query) => activityLogModel.find(query),
    countDocuments: (query) => activityLogModel.countDocuments(query)
};
