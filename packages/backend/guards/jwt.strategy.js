const jwt = require('jsonwebtoken')
require('dotenv').config()

const guard = (req, res, next) => {
  try{
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];
    const decode = jwt.verify(token, process.env.API_KEY)
    req.userData = decode
    next();
  }catch(err){
    console.log(err)
    res.status(401).json({
      message: 'Auth failed ! '
    })
  }
}
module.exports = { guard }
