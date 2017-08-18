'use strict';

/**
 * @param (Mongoose Object)
 * */
var customerController = function customerController(Customer) {

    var get = function get(req, res) {

        Customer.find(function (err, customers) {
            if (err) {
                res.status(500).send(err);
            } else {

                var _customers = customers.map(function (customer, i) {
                    var newCustomer = customer.toJSON();
                    // hateos
                    newCustomer.links = {};
                    newCustomer.links.self = 'http://' + req.headers.host + '/api/customers/' + newCustomer._id;

                    return newCustomer;
                });
                res.json(_customers);
            }
        });
    };

    var post = function post(req, res) {

        var customer = new Customer(req.body);
        console.log(customer);

        if (!req.body.name) {
            res.status(400);
            res.send('customer required');
        } else {

            customer.save();
            res.status(200);
            res.send(customer);
        }
    };

    return { get: get, post: post };
};

module.exports = customerController;
//# sourceMappingURL=customerController.js.map