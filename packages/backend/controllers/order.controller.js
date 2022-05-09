const { createOrder, getAllOrdersByUsername } = require('../services/order.service')
const  { logger } = require('../logs/logger')


async function postCreateOrder(req, res) {
    const {username, price, cart} = req.body    
    if(await createOrder(username, price, cart)){
        res.sendStatus(200)
    }else{
        logger.error('Status : 500 in the create a order')
        res.sendStatus(500)
    }
}
async function getOrdersByUsername(req, res) {    
    const  username  = req.params.username
    const orders = await getAllOrdersByUsername(username)
    if(orders){
        res.send(orders)
    }else{
        logger.error('Status : 500 in the get orders')
        res.sendStatus(500)
    }
}

module.exports  = { 
    postCreateOrder,
    getOrdersByUsername
}