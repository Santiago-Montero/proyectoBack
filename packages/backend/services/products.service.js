const  Products  = require('../models/products/products.model')
const products = new Products()

async function getProducts(){
    return await products.getAll();
}
async function createProduct(product){
    return await products.create(product)
}
async function getProduct(id){
    return await products.getById(id)
}
module.exports = {
    getProducts,
    createProduct,
    getProduct
}