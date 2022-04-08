const  Model = require('../db.model')

class Products extends Model {
    constructor() {
        super('products', {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            description: { type: String, required: true },
            photo: { type: String, required: true },
            stock: { type: Number, required: true },
            timestamp: { type: Date, required: true },
        })
    }
}

module.exports = Products;