const express = require('express')
const app = express(); 
const listen = 1313; 
const getProducts = require('./getProducts')
const getProduct = require('./getProduct');


app.use(express.json()); 
app.listen(listen, () => console.log(`${listen}`))

app.get('/api/products',getProducts)

app.get('/api/products/:id', getProduct)
