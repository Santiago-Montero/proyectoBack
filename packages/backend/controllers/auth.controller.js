const { login, signup, getUserByUsername } = require('../services/auth.service')
const  { logger } = require('../logs/logger')

async function postLogin(req, res) {
    const {username, password} = req.body
    const token = await login(username, password)
    if(token){
        res.send(token) 
    }else{
        logger.error('Status : 500 in the login')
        res.sendStatus(400)
    }
}

async function postSignUp(req, res) {
    const user = req.body
    if(await signup(user)){
        res.sendStatus(200) 
    }else{
        logger.error('Status : 500 in the sign up')
        res.sendStatus(400)
    }
}

async function getUser(req, res) {
    const  username  = req.params.username
    const user = await getUserByUsername(username)
    if(user){
        res.send(user)
    }else{
        logger.error('Status : 500 in the get user')
        res.sendStatus(500)
    }
}

module.exports  = { 
    postLogin,
    postSignUp,
    getUser
}