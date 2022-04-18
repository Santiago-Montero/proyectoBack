const express = require('express')
const { Router } = express
const { getProducts, createProduct, getProduct } = require('./services/products.service')
const { createUser, login } = require('./services/auth.service')

const app = express();
app.use(express.json());


const routerProducts =  Router();
app.use("/products", routerProducts);
const routerUsers =  Router();
app.use("/user", routerUsers);


routerProducts.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
routerUsers.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


app.listen(8080, () =>{
    console.log('Servidor corriendo en 8080...');
})


routerProducts.get('/', async (req, res) => {
    const products = await getProducts()
    console.log(products)
    res.send(products)
    return products
})
routerProducts.get('/:id', async (req, res) => {
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
routerUsers.post('/', async (req, res)=> {
    const user = req.body
    // validar info 
    await createUser(user)
    console.log(user)
})

routerUsers.post('/login', async (req, res)=> {
    const {username, password} = req.body
    res.send(await login(username, password)) // Error | token
})
