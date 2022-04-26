const  Users  = require('../models/auth/auth.model');
const { transporter } = require('./ message/message.mail');
const users = new Users()
require('dotenv').config()

async function getUsers(){
    return await users.getAll();
}
async function getUserByUsername(username){
    return await users.getByUsername(username)
}
async function login(username, pass){
    return await users.login(username, pass)
}
async function signup(user) {
    const newUser = await users.signup(user)
    if(newUser){
        const mailOptions = {
            from: process.env.MAIL_ADMIN,
            to: process.env.MAIL_ADMIN,
            subject: 'New user registered',
            html: `${user.username} successfully registered`
        }
        transporter.sendMail(mailOptions)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return newUser
}
module.exports = {
    getUsers,
    login,
    signup,
    getUserByUsername,
}