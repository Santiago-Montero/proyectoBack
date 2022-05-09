const { getAllProducts, createProduct, getProductById, putUpdateProduct, getAllProductsByCategory, deleteProductById } = require('../services/products.service')
const  { logger } = require('../logs/logger')

async function getProducts(req, res) {
    const products = await getAllProducts()
    if(products){
        res.send(products)
    }else{
        logger.error('Status : 500 in the get products')
        res.sendStatus(500)
    }
}

async function getProduct(req, res) {
    const id = req.params.id
    const product = await getProductById(id)
    if(product){
        res.send(product)
    }else{
        logger.error('Status : 404 in the get product by id')
        res.sendStatus(404)
    }
}
async function getProductsByCategory(req, res) {
    const category = req.params.category
    const products = await getAllProductsByCategory(category)
    if(products){
        res.send(products)
    }else{
        logger.error('Status : 404 in the get products by categories')
        res.sendStatus(404)
    }
}
async function postcreateProduct(req, res) {
    const product = req.body
    const newProduct = await createProduct(product)
    if(newProduct){
        res.sendStatus(200)
    }else{
        logger.error('Status : 500 in the post create product')
        res.sendStatus(500)
    }
}

async function putProduct(req, res) {
    const id = req.params.id
    const product = req.body
    const updateProduct = await putUpdateProduct(id,product)
    if(updateProduct){
        res.sendStatus(200)
    }else{
        logger.error('Status : 500 in the put update product')
        res.sendStatus(500)
    }
}
async function deleteProduct(req, res) {
    const id = req.params.id
    const deleteProduct = await deleteProductById(id)
    if(deleteProduct){
        res.sendStatus(200)
    }else{
        logger.error('Status : 500 in the delete product')
        res.sendStatus(500)
    }
}

module.exports  = { 
    postcreateProduct,
    getProduct,
    getProducts,
    getProductsByCategory,
    deleteProduct,
    putProduct,
}