'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _customerController = require('../controllers/customerController');

var _customerController2 = _interopRequireDefault(_customerController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lejoss on 7/30/16.
 */

var routes = function routes(Customer) {

    var customerRouter = _express2.default.Router();
    var customerCtrl = (0, _customerController2.default)(Customer);

    customerRouter.route('/').post(customerCtrl.post).get(customerCtrl.get);

    customerRouter.use('/:customerId', function (req, res, next) {
        Customer.findById(req.params.customerId, function (err, customer) {
            if (err) {
                res.status(500).send(err);
            } else if (customer) {
                req.customer = customer;
                next();
            } else {
                res.status(404).send('no customer found');
            }
        });
    });

    customerRouter.route('/:customerId').get(function (req, res) {
        var returnCustomer = req.customer.toJSON();

        returnCustomer.links = {};
        res.json(returnCustomer);
    });

    return customerRouter;
};

module.exports = routes;
//# sourceMappingURL=customerRoutes.js.map