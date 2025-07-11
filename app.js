const express = require('express')  //getting the express module
require('dotenv').config()
const app = express()
const router = express.Router();

//Initiaizing the port 3000

const PORT = process.env.PORT


app.use(express.json())
app.use('/api/v1',require('./Routes/ResturantRoutes'))
require('dotenv').config()
console.log(process.env.ATLAS_URI) // Just to check if it loaded correctly


app.listen(PORT, () =>{
    console.log(`app listening on port ${PORT}`)
})

