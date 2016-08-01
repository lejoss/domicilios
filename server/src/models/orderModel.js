/**
 * Created by lejoss on 7/30/16.
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderModel = new Schema({
    customer: {
        type: Object
    },
    store: {
        type: Object
    },
    items: {
        type: Object
    },
    total: {
        type: Number
    }
})

module.exports = mongoose.model('Order', orderModel)


// model example
//
// {
//    "customer": {
//    "name": "Guillermo",
//        "address": "La abadia"
//},
//    "store": {
//    "name": "Cocheros"
//},
//    "items": {
//    "burger": {
//        "name": "Cocheros Simple",
//            "price": 100
//    }
//},
//    "total": 100
//}