require('dotenv').config()

const { createTransport } = require('nodemailer')

const mail = process.env.MAIL_ADMIN
//mjybrqzqnthplpuh
const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: mail,
        pass: process.env.PASS_EMAILER
    }
});

module.exports = { transporter }