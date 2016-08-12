/**
 * Created by lejoss on 7/28/16.
 */

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const restaurantModel = new Schema({
    name: {
        type: String
    },
    locations: {
        type: Array
    },
    catalog: {
        type: Object
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Restaurant', restaurantModel)


/* example restaurant json model
{
 "restaurant": {
 "name": "Cocheros",
 "locations": [
 {
 "desc": "Cocheros Cerca al Colegio Inem",
 "address": "Avenidad Carrera 19 # 10N - 13"
 },
 {
 "desc": "Cocheros Americas",
 "address": "Carrera 21 # 56N - 13"
 },
 {
 "desc": "Cocheros Fundadores",
 "address": "Parque Fundadores"
 }
 ],
 "catalog": {
 "food": [
 {
 "burgers": [
 {
 "name":"Cocheros Simple",
 "ingredients": [
 "125 lbs Carne Res",
 "Tomate, Cebolla, Lechuga",
 "Queso Americano"
 ],
 "price": 100

 },
 {
 "name":"Cocheros Ranger",
 "ingredients": [
 "175 lbs Carne Res",
 "Tomate, Cebolla, Lechuga",
 "Doble Queso Americano",
 "Doble Tocineta"
 ],
 "price": 150

 }
 ],
 "Dogs": [
 {
 "name":"Cocheros Dog",
 "ingredients": [
 "100 lbs Salchicha Suiza",
 "Tocineta",
 "Queso Americano"
 ],
 "price": 80
 }
 ]
 }
 ],
 "beverage": [
 {
 "name": "Coca-Cola",
 "price": 23
 }
 ]
 },
 "bannerImage":"img"
 }
 }
* */