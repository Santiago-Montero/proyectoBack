const { createCart } = require('../services/cart.service')


async function postCreateCart(req, res) {
    const {user, products, price} = req.body
    res.send( await createCart(user, products, price));
}


module.exports  = { 
   postCreateCart,
}