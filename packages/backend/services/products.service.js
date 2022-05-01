const  Products  = require('../models/products/products.model')
const products = new Products()

async function getAllProducts(){
    return await products.getAll();
}
async function createProduct(product){
    return await products.create(product)
}
async function getProductById(id){
    return await products.getById(id)
}
async function putUpdateProduct(id, product){
    return await products.updateById(id, product)
}
module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    putUpdateProduct
}