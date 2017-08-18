'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; /**
                                         * Created by lejoss on 7/30/16.
                                         */

var orderModel = new Schema({
    customer: {
        type: Object
    },
    order: {
        type: Object
    },
    items: {
        type: Object
    },
    total: {
        type: Number
    }
});

module.exports = _mongoose2.default.model('Order', orderModel);

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
//# sourceMappingURL=orderModel.js.map