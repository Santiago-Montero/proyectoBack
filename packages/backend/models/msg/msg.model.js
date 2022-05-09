const  Model = require('../db.model')

class Message extends Model {
    constructor() {
        super('message', {
            username: { type: String, required: true },
            message: { type: String, required : true},
            timestamp: { type: Date, required: true },
        })
    }
    async getAllByUsername(username) {
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

module.exports = Message;