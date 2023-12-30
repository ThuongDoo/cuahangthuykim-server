const Customer = require("../models/Customer")


const createCustomer =async(req,res)=>{
    const {name,repayment,pastDebt} = req.body
    const customer = await Customer.create({name,repayment,pastDebt})
    res.status(400).json('success')
}

const getAllCustomers = async(req,res)=>{
    const customers = await Customer.find({})
    res.status(400).json(customers)
}

const getCustomer = async(req,res)=>{
    const {id} = req.params
    const customer = await Customer.findById(id)
    if(!customer){
        return res.status(404).json('not found')
    }
    res.status(400).json(customer)
}

module.exports ={createCustomer,getCustomer, getAllCustomers}