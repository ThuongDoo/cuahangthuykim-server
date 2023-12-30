require('express-async-errors')
const express = require('express')
const connectDB = require('./db/connectDB')
const { createProduct, getProduct, getAllProduct } = require('./controllers/productController')
const { createCustomer, getCustomer, getAllCustomers } = require('./controllers/customerController')
const app = express()

app.use(express.json())

app.post('/product',createProduct)
app.get('/product/:id',getProduct)
app.get('/product',getAllProduct)

app.post('/customer',createCustomer)
app.get('/customer/:id',getCustomer)
app.get('/customer',getAllCustomers)

mongo_url = "mongodb+srv://thuongdo:0mkKWXpdrhWYrL1v@nodecourse.dcfmcdw.mongodb.net/cuahangthuykim?retryWrites=true&w=majority"
const port = process.env.PORT || 3000
const start = async() => {
    try {
        await connectDB(mongo_url)
        app.listen(port, () => {
            console.log('SERVER IS LISTENING ON PORT', port);
        })
    } catch (error) {
        console.log(error);
    }
}

start()


