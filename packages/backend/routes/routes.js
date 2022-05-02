const express = require("express");
const { Router }  = require('express')
const compression = require("compression");
const { guard } = require('../guards/jwt.strategy');
const { getProducts, getProduct, postcreateProduct, putProduct } = require("../controllers/products.controller");
const { postSignUp, postLogin, getUserByUsername, getUser } = require("../controllers/auth.controller");
const { postCreateCart } = require("../controllers/cart.controller");
const cors = require('cors')

const app = express();
app.use(cors())
app.use(compression());
app.use(express.json());

const routerProducts =  Router();
const routerUsers =  Router();
const routerCart =  Router();

app.use("/products", routerProducts);
app.use("/user", routerUsers);
app.use("/cart", routerCart);

app.use(express.urlencoded({ extended: true}));
routerProducts.use(express.urlencoded({extended: true }));
routerCart.use(express.urlencoded({extended: true }));

routerUsers.use(express.json())



routerProducts.get('/', getProducts)
routerProducts.get('/:id',guard, getProduct)
routerProducts.post('/', guard, postcreateProduct)
routerProducts.patch('/update/:id', putProduct)

routerUsers.get('/:username', getUser)
routerUsers.post('/signup', postSignUp)
routerUsers.post('/login', postLogin)


routerCart.post('/',guard, postCreateCart)

module.exports = {
    app
}



