const { app } = require('./routes/routes.js')
const parseArgs = require('minimist')
require('dotenv').config()

const args = parseArgs(process.argv.slice(2))
console.log(args)
const MODE = args.MODE || process.env.NODE_ENV
const PORT =  args.PORT || process.env.PORT
app.listen(PORT, () =>{
    console.log('Server is runnig in port '+ PORT+' and the enviroment is '+MODE)
});
