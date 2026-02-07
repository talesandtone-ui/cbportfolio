const MockModel = require('../utils/MockModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class MockUser extends MockModel {
    constructor() {
        super('User');
        // Seed Admin and Demo User
        this.create({
            _id: '1',
            name: 'Admin User',
            email: 'admin@buildlabs.in',
            password: this._hash('admin123'),
            role: 'admin'
        });
        this.create({
            _id: '2',
            name: 'Demo Client',
            email: 'client@demo.com',
            password: this._hash('password'),
            role: 'user'
        });
    }

    _hash(password) {
        return bcrypt.hashSync(password, 10);
    }

    // This overrides the parent's _processDoc to add methods
    _processDoc(doc) {
        if (!doc) return null;
        if (doc.matchPassword) return doc; // Already processed

        return {
            ...doc,
            matchPassword: async function (enteredPassword) {
                return await bcrypt.compare(enteredPassword, this.password);
            },
            getSignedJwtToken: function () {
                return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
                    expiresIn: '30d'
                });
            }
        };
    }

    // REMOVED overrides for findOne, findById, find
    // They now rely on MockModel's implementation which returns a QueryHandler
    // that calls _processDoc correctly on resolution.

    async create(data) {
        if (data.password && !data.password.startsWith('$2a$')) {
            const salt = await bcrypt.genSalt(10);
            data.password = await bcrypt.hash(data.password, salt);
        }
        if (!data.role) data.role = 'user';
        return super.create(data);
    }
}

const userModel = new MockUser();

module.exports = {
    create: (data) => userModel.create(data),
    findOne: (query) => userModel.findOne(query),
    findById: (id) => userModel.findById(id),
    find: (query) => userModel.find(query),
    countDocuments: (query) => userModel.countDocuments(query)
};
