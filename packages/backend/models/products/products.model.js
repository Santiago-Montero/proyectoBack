const  Model = require('../db.model')

class Products extends Model {
    constructor() {
        super('products', {
            name: { type: String, required: true },
            price: { type: Number, required: true },
            description: { type: String, required: true },
            photo: { type: String, required: true },
            stock: { type: Number, required: true },
            category: { type: String, required: true },
            timestamp: { type: Date, required: true },
        })
    }
    async getByCategory(category){
        try{
            const docs = await this.collection.find({ category: category}).lean()
            if(docs.length >= 1){
                return docs
            }
        }catch(err){
            console.log(err)
        }
    }
}

module.exports = Products;