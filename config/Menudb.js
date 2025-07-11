require('mongoose')
const mongoose = require("mongoose")

//connecting to mongodb database

mongoose.connect(process.env.ATLAS_URI)
