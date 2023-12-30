const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    name:String,
    repayment:Number,
    pastDebt:Number
},{timestamps:true})

module.exports = mongoose.model('Customer',CustomerSchema)