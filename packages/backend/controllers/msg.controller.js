const  { logger } = require('../logs/logger')
const { saveMsg, getAllMsgByUsername } = require('../services/msg.service')


async function postSaveMsg(req, res) {
    const {username, message} = req.body    
    if(await saveMsg(username, message)){
        res.sendStatus(200)
    }else{
        logger.error('Status : 500 in the save msg')
        res.sendStatus(500)
    }
}

async function getMsg(req, res) {
    const username = req.params.username ; 
    const allMsg = await getAllMsgByUsername(username)
    if(allMsg){
        res.send(allMsg)
    }else{
        logger.error('Status : 500 in the save msg')
        res.sendStatus(500)
    }
}
module.exports  = { 
    postSaveMsg,
    getMsg
}