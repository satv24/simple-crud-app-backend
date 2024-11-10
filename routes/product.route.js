const express=require("express");
const router=express.Router();
const products=require("../models/product.model.js")
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct}=require('../contollers/product.controller.js');

//get products
router.get('/',getProducts);


//get product by id
router.get('/:id',getProduct);


//create a product
router.post('/',createProduct);


//update a product
router.put('/:id',updateProduct);


//delete a product
router.delete('/:id',deleteProduct);


module.exports=router;