class MockModel {
    constructor(name, schema = {}) {
        this.name = name;
        this.data = []; // In-memory store
    }

    // Create new document
    async create(doc) {
        const newDoc = {
            _id: Math.random().toString(36).substr(2, 9),
            createdAt: new Date(),
            ...doc
        };
        this.data.push(newDoc);
        return this._processDoc(newDoc);
    }

    // Find multiple documents
    find(query = {}) {
        let result = this.data.filter(item => this._matches(item, query));
        return new QueryHandler(result, this._processDoc.bind(this));
    }

    // Find one document
    findOne(query = {}) {
        const item = this.data.find(item => this._matches(item, query));
        return new QueryHandler(item, this._processDoc.bind(this));
    }

    // Find by ID - return QueryHandler to match Mongoose if chained, or promise if awaited?
    // Mongoose findById returns a Query.
    findById(id) {
        const item = this.data.find(item => item._id === id);
        return new QueryHandler(item, this._processDoc.bind(this));
    }

    // Count documents
    async countDocuments(query = {}) {
        return this.data.filter(item => this._matches(item, query)).length;
    }

    // Aggregate (Stub)
    async aggregate(pipeline) {
        return [];
    }

    // Helper: Match query
    _matches(item, query) {
        for (let key in query) {
            if (item[key] !== query[key]) return false;
        }
        return true;
    }

    // Helper: Add instance methods if needed (like matchPassword)
    _processDoc(doc) {
        return doc; // Overridden in specific models if needed
    }
}

// Helper class to handle chaining like .sort().limit().select()
class QueryHandler {
    constructor(data, transformFn) {
        this.data = data;
        this.transformFn = transformFn;
    }

    sort(criteria) {
        if (Array.isArray(this.data)) {
            // Simple sort implementation (only supports -1 for descending)
            const key = Object.keys(criteria)[0];
            const dir = criteria[key];
            this.data.sort((a, b) => {
                if (a[key] < b[key]) return dir === -1 ? 1 : -1;
                if (a[key] > b[key]) return dir === -1 ? -1 : 1;
                return 0;
            });
        }
        return this;
    }

    limit(n) {
        if (Array.isArray(this.data)) {
            this.data = this.data.slice(0, n);
        }
        return this;
    }

    select(fields) {
        // Mock select: just return this for chaining
        return this;
    }

    populate(field, select) {
        return this;
    }

    // Final execution
    then(resolve, reject) {
        const result = this._getResult();
        return Promise.resolve(result).then(resolve, reject);
    }

    async exec() {
        return this._getResult();
    }

    _getResult() {
        if (Array.isArray(this.data)) {
            return this.data.map(item => this.transformFn ? this.transformFn(item) : item);
        }
        return this.transformFn ? this.transformFn(this.data) : this.data;
    }
}

module.exports = MockModel;
