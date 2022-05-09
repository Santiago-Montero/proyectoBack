const { createCart } = require('../services/cart.service')
const  { logger } = require('../logs/logger')


async function postCreateCart(req, res) {
    const {user, products, price} = req.body
    const cart = await createCart(user, products, price)
    console.log(cart)
    if(cart){
        res.send(cart)
    }else{
        logger.error('Status : 500 in the create a cart')
        res.sendStatus(500)
    }
}


module.exports  = { 
   postCreateCart,
}