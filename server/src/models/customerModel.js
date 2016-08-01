/**
 * Created by lejoss on 7/30/16.
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const customerModel = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
})

module.exports = mongoose.model('Customer', customerModel)

// example model
// {
//    "customer": {
//    "name": "Alejandro Baez Arcila",
//        "phone": "4455676",
//        "address": "Proviteq Unidad 3 bloque 16 apt 4B"
//}
//}