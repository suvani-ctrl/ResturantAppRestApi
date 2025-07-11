const mongoose = require('mongoose')
mongoose.connect(process.env.ATLAS_URI)
const MenuSchema = new  mongoose.Schema({
    item:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})


const MenuModel = mongoose.model("menu",MenuSchema)

module.exports = MenuModel;