const { getAllProducts, createProduct, getProductById } = require('../services/products.service')

async function getProducts(req, res) {
    const products = await getAllProducts()
    res.send(products)
}

async function getProduct(req, res) {
    const id = req.params.id
    const product = await getProductById(id)
    res.send(product)
}

async function postcreateProduct(req, res) {
    const product = req.body
    const newProduct = await createProduct(product)
    res.send(newProduct)
}

module.exports  = { 
    postcreateProduct,
    getProduct,
    getProducts,
}