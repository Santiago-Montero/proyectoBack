const  Model = require('../db.model')

class Cart extends Model {
    constructor() {
        super('cart', {
            username: { type: String, required: true },
            products: { type: Array, required : true},
            price: { type: Number, required: true },
            timestamp: { type: Date, required: true },
        })
    }
}

module.exports = Cart;