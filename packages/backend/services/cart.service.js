const Cart = require('../models/cart/cart.model');
const { transporter } = require('./ message/message.mail');
const { client } = require('./ message/message.wpp');
require('dotenv').config()

const cart = new Cart()

async function getCart(id){
    return await cart.getById(id);
}
async function createCart(user, products, price){
    const cartProducts = {
        username : user.username,
        products : products,
        price : price,
        timestamp: new Date(),
    }
    const newCart = await cart.create(cartProducts)
    console.log(newCart)
    if(newCart){
        let msg = ''
        products.forEach( product => {
            msg += product.name+'\n'
        })
        const mailOptions = {
            from: process.env.MAIL_ADMIN, 
            to: process.env.MAIL_ADMIN,
            subject: 'New order '+ user.username,
            html: `<h1 style="color: blue;">The user buy these products : `+ msg
        }
        transporter.sendMail(mailOptions)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        client.messages.create({
            from: 'whatsapp:+14155238886',
            body: 'New order '+ user.username +'. The user buy these products :'+ msg,
            to: 'whatsapp:'+ process.env.WPP_ADMIN
        })
        .then(message => console.log(message.sid))
        .catch((error) => console.log(error));
        
        client.messages.create({
            body: 'Your order was received and is in process...',
            from: '+18285648984',
            to: user.phone
        })
        .then((message) =>  console.log(message))
        .catch((error) =>  console.log(error))
    }
    return newCart 
}
module.exports = {
    getCart,
    createCart,
}