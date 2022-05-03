const  Products  = require('../models/products/products.model')
const products = new Products()

async function getAllProducts(){
    return await products.getAll();
}
async function getAllProductsByCategory(category){
    return await products.getByCategory(category)
}
async function createProduct(product){
    const newProduct = {
        ...product,
        timestamp: new Date()
    }
    return await products.create(newProduct)
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
    getAllProductsByCategory,
    putUpdateProduct
}