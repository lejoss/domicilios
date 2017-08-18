'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by lejoss on 7/28/16.
                                         */

var restaurantModel = new Schema({
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
});

module.exports = _mongoose2.default.model('Restaurant', restaurantModel);

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
//# sourceMappingURL=restaurantModel.js.map