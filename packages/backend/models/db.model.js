const mongoose = require('mongoose')
const  config  = require('./config')


mongoose.connect(config.mongodb.url, config.mongodb.options) 

class Model {
    constructor(collectionName, schema) {
        this.collection = mongoose.model(collectionName, schema)
    }
    async create(element) {
        try{
            const doc = await this.collection.create(element)
            if(doc){
                console.log('Se creo correctamente')
            }
        }catch(err){
            console.log(err)
        }
    }
    async getAll() {
        try{
            const docs = await this.collection.find({}).lean()
            if(docs.length >= 1){
                return docs
            }
        }catch(err){
            console.log(err)
        }
    }
    async getById(id) {
        try {
            const docs = await this.collection.find({ '_id': id }).lean()
            if (docs.length >= 1) {
                return docs[0]
            }
        } catch (err) {
            console.log(err)
        }
    }
    async updateById(id, element) {
        try{
            const update = await this.collection.updateOne({'_id' : id}, element)
            if(update){
                return update
            }
        }catch(err){
            console.log(err)
        }
    }
    async deleteById(id){
        try{
            const deleteElement = await this.collection.deleteOne({'_id' : id})
        }catch(err){
            console.log(err)
        }
    }
}

module.exports =  Model 