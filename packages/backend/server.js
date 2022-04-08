const express = require('express')
const { getProducts, createProduct, getProduct } = require('./services/products.service')


const app = express();
app.use(express.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(8080, () =>{
    console.log('Servidor corriendo en 8080...');
})


app.get('/products', async (req, res) => {
    const products = await getProducts()
    console.log(products)
    res.send(products)
    return products
})
app.get('/products/:id', async (req, res) => {
    const id = req.params.id
    const product = await getProduct(id)
    console.log(product)
    res.send(product)
    return product
})
app.post('/', async (req, res)=> {
    const product = req.body
    // validar info 
    await createProduct(product)
    console.log(product)
})


