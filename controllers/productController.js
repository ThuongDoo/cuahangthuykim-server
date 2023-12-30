const Product = require('../models/Product')


const getProduct = async(req,res)=>{
    const {id} = req.params
    const product = await Product.findById(id)
    if(!product){
        return res.status(404).json('not found')
    }
    res.status(400).json(product)
}

const getAllProduct = async(req,res)=>{
    const products = await Product.find({})
    res.status(400).json(products)
}

const createProduct = async(req,res)=>{
    const {name,price} =req.body
    const product = await Product.create({name,price})
    res.status(400).json('success')
}

module.exports ={getProduct,createProduct, getAllProduct}