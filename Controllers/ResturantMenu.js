const express = require('express')  //getting the express module
require('dotenv').config()
const app = express()
const router = express.Router();
const asyncHandler = require('express-async-handler');
const MenuModel = require("../Schema/MenuSch")
const Menu = asyncHandler(async(req,res) =>
{
    res.status(200).json({message: "Menu Items"})
})


const getSingleItem = asyncHandler(async(req,res) =>
{
    res.status(200).json({message: "Get single items"})
})


const addItem = asyncHandler(async(req,res) =>{
    console.log("req.body:", req.body);
    const newItem = await MenuModel.create(req.body);
    console.log("Saved new item:", newItem);

})

const updateItem = asyncHandler(async(req,res) =>{
    res.status(200).json({message: "update an item"})
})

const deleteItem = asyncHandler(async(req,res) =>
{
    res.status(200).json({message: "delete an item"})
})

module.exports = {Menu,getSingleItem, addItem, updateItem, deleteItem}