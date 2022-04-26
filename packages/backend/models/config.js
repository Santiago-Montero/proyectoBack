require('dotenv').config()

module.exports = {
    mongodb: {
        url: process.env.DB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
}