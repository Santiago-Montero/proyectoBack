const { login, signup, getUserByUsername } = require('../services/auth.service')


async function postLogin(req, res) {
    const {username, password} = req.body
    res.send(await login(username, password)) // Error | token
}

async function postSignUp(req, res) {
    const user = req.body
    res.send(await signup(user))
}

async function getUser(req, res) {
    const  username  = req.params.username
    res.send(await getUserByUsername(username))
}

module.exports  = { 
    postLogin,
    postSignUp,
    getUser
}