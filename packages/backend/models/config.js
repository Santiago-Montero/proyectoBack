module.exports = {
    mongodb: {
        url: process.env.DB_URL || 'mongodb+srv://santi:admin@cluster0.o5xka.mongodb.net/ecommerce?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    }
}