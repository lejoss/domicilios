'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _orderController = require('../controllers/orderController');

var _orderController2 = _interopRequireDefault(_orderController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lejoss on 7/30/16.
 */

var routes = function routes(Order) {

    var orderRouter = _express2.default.Router();
    var orderCtrl = (0, _orderController2.default)(Order);

    orderRouter.route('/').post(orderCtrl.post).get(orderCtrl.get);

    orderRouter.use('/:orderId', function (req, res, next) {
        Order.findById(req.params.orderId, function (err, order) {
            if (err) {
                res.status(500).send(err);
            } else if (order) {
                req.order = order;
                next();
            } else {
                res.status(404).send('no order found');
            }
        });
    });

    orderRouter.route('/:orderId').get(function (req, res) {
        var returnOrder = req.order.toJSON();

        returnOrder.links = {};
        res.json(returnOrder);
    });

    return orderRouter;
};

module.exports = routes;
//# sourceMappingURL=orderRoutes.js.map