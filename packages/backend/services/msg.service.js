const Message = require('../models/msg/msg.model');
require('dotenv').config()

const msg = new Message()

async function saveMsg(username, message){
    const newMsg = {
        username,
        message,
        timestamp: new Date()
    }
    return await msg.create(newMsg)
}

async function getAllMsgByUsername(username) {
    return await msg.getAllByUsername(username)
}
module.exports = {
    saveMsg,
    getAllMsgByUsername
}