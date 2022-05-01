const  Model = require('../db.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require('dotenv').config()

class Users extends Model {
    static SALT_WORK_FACTOR = 10

    constructor() {
        super('users', {
            firstName: { type: String, required: true },
            lastName: {type: String, required: true },
            username: { type: String, required: true, unique: true},
            password: { type: String, required: true },
            email:  {type: String, required: true, unique: true },
            phone: { type: Number, required: true },
            avatar: { type: String, required: true },
            
        })
    }
    async createHash(pass) {
        const salt = await bcrypt.genSalt(Users.SALT_WORK_FACTOR)
        const hash = await  bcrypt.hash(pass, salt)
        return hash
    }
    async validate(hash, pass) {
        return bcrypt.compare(pass, hash)
    }
    async getByUsername(username) {
        try {
            const docs = await this.collection.find({ 'username': username }).lean()
            if (docs.length >= 1) {
                return docs[0]
            }
        } catch (err) {
            console.log(err)
        }
    }
    async login(username, pass) {
        const user = await this.getByUsername(username) ;
        if(user && await this.validate(user.password, pass)){
            const payload = {  id: user._id, username, admin: username.admin }
            const token = jwt.sign(
                payload,
                process.env.API_KEY,);
            return token
        }
        throw new Error( 'Incorrect username' );
    }
    async signup(user) {
        const hash = await this.createHash(user.password)
        const newUser = {
            ...user,
            password : hash
        }
        if(await this.create(newUser)){
            return true
        }
        throw new Error( 'Error in sign up' );
        
    }
}

module.exports = Users;