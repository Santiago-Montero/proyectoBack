const express = require("express");
const { Router }  = require('express')
const compression = require("compression");
const { guard } = require('../guards/jwt.strategy');
const { getProducts, getProduct, postcreateProduct } = require("../controllers/products.controller");
const { postSignUp, postLogin, getUserByUsername, getUser } = require("../controllers/auth.controller");
const { postCreateCart } = require("../controllers/cart.controller");

const app = express();
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

routerCart.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


routerProducts.get('/', getProducts)
routerProducts.get('/:id', getProduct)
routerProducts.post('/', guard, postcreateProduct)

routerUsers.get('/:username', getUser)
routerUsers.post('/signup', postSignUp)
routerUsers.post('/login', postLogin)


routerCart.post('/',guard, postCreateCart)

module.exports = {
    app
}



