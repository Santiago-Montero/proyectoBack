require('dotenv').config()

const twilio = require('twilio')

const accountSid = process.env.AC_COUNTS_ID
const authToken = process.env.AUTH_TOKEN

const client = twilio(accountSid, authToken)


module.exports ={ client }