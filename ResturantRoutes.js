const express = require('express')  //getting the express module
require('dotenv').config()
const app = express()
const router = express.Router();

//to make it functional i need to export the main functioinality that is on ResturantMenu.js

const ResturantMenu = require('../Controllers/ResturantMenu')

const { Menu,getSingleItem,addItem,updateItem,deleteItem } = require('../Controllers/ResturantMenu');

router.get('/Menu', Menu)
router.get('/Menu/:id', getSingleItem)
router.post('/addItem', addItem)
router.put('/updateItem',updateItem)
router.delete('/deleteItem/:id', deleteItem)


module.exports =  router