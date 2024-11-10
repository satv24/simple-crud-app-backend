const express = require('express');
const mongoose = require('mongoose');
const app = express();
const products=require('./models/product.model.js')
const productRoute=require('./routes/product.route.js');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products",productRoute);


app.get('/',(req,res)=>{
    res.send("Hello from node api server 123");
});

mongoose.connect("mongodb+srv://<mongodb username>:<mongodb password>@backend.rogp5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backend")
.then(()=>{
    console.log("Connected to the db");
    app.listen(3000,()=>{
        console.log("running on port 3000");
    });
})
.catch(()=>{
    console.log("Not connected to the db");
});