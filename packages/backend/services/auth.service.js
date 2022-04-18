const  Users  = require('../models/auth/auth.model')
const users = new Users()

async function getUsers(){
    return await users.getAll();
}
async function createUser(user){
    const hash = await users.createHash(user.password) ; 
    const newUser = {
        ...user,
        password : hash
    }
    return await users.create(newUser)
}
async function getUser(id){
    return await users.getById(id)
}
async function login(username, pass){
    return await users.login(username, pass)
}
module.exports = {
    getUsers,
    createUser,
    login,
    getUser
}