const express = require("express");
const { Router }  = require('express')
const compression = require("compression");
const { guard } = require('../guards/jwt.strategy');
const { getProducts, getProduct, postcreateProduct, putProduct, getProductsByCategory, deleteProduct } = require("../controllers/products.controller");
const { postSignUp, postLogin, getUser } = require("../controllers/auth.controller");
const { postCreateCart } = require("../controllers/cart.controller");
const cors = require('cors');
const { postCreateOrder, getOrdersByUsername } = require("../controllers/order.controller");
const { router } = require("websocket");
const { postSaveMsg, getMsg } = require("../controllers/msg.controller");

const app = express();
app.use(cors())
app.use(compression());
app.use(express.json());

const routerProducts =  Router();
const routerUsers =  Router();
const routerCart =  Router();
const routerOrder = Router();
const routerMsg= Router();


app.use("/products", routerProducts);
app.use("/user", routerUsers);
app.use("/cart", routerCart);
app.use("/order", routerOrder);
app.use("/msg", routerMsg);

app.use(express.urlencoded({ extended: true}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080/');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });
routerProducts.use(express.urlencoded({extended: true }));
routerCart.use(express.urlencoded({extended: true }));

routerUsers.use(express.json())


routerProducts.get('/', getProducts)
routerProducts.get('/:id', getProduct)
routerProducts.get('/category/:category', getProductsByCategory)
routerProducts.post('/', guard, postcreateProduct)
routerProducts.patch('/:id/update', guard,putProduct)
routerProducts.delete('/:id/delete', guard, deleteProduct)

routerUsers.get('/:username', getUser)
routerUsers.post('/signup', postSignUp)
routerUsers.post('/login', postLogin)

routerCart.post('/', guard, postCreateCart)

routerOrder.post('/', guard, postCreateOrder)
routerOrder.get('/:username', guard, getOrdersByUsername)

routerMsg.post('/', guard, postSaveMsg)
routerMsg.get('/:username', guard, getMsg)

module.exports = {
    app
}



