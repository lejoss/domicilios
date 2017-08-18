'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by lejoss on 7/30/16.
                                         */

var customerModel = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
});

module.exports = _mongoose2.default.model('Customer', customerModel);

// example model
// {
//    "customer": {
//    "name": "Alejandro Baez Arcila",
//        "phone": "4455676",
//        "address": "Proviteq Unidad 3 bloque 16 apt 4B"
//}
//}
//# sourceMappingURL=customerModel.js.map