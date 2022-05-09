const  Model = require('../db.model')

class Order extends Model {
    constructor() {
        super('orders', {
            username: { type: String, required: true },
            price: { type: Number, required: true },
            cart: { type: Object, required: true },
            cartOrder: { type: String, required: true},
            state:{ type: String, required: true },
        }) //  buy a cart then create the order
    }
    async getByUsername(username){
        try{
            const docs = await this.collection.find({ 'username': username}).lean()
            if(docs.length >= 1){
                return docs
            }
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = Order;