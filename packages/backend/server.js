const { app } = require('./routes/routes.js')
require('dotenv').config()


app.listen(process.env.PORT, () =>{
    console.log('Server is runnig in port '+ process.env.PORT)
});
