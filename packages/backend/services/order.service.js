const Order = require('../models/order/order.model');
require('dotenv').config()

const order = new Order()

async function createOrder(username, price, cart){
    const cartId = cart._id
    const newOrder = {
        username,
        price,
        cart,
        cartOrder : cartId,
        state: 'Generate'
    }
    return await order.create(newOrder)
}

async function getAllOrdersByUsername(username){
    return order.getByUsername(username);
}
module.exports = {
    createOrder,
    getAllOrdersByUsername
}
