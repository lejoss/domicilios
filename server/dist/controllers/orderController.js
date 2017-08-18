'use strict';

/**
 * @param (Mongoose Object)
 *
 * */
var orderController = function orderController(Order) {

    var get = function get(req, res) {

        Order.find(function (err, orders) {
            if (err) {
                res.status(500).send(err);
            } else {

                var returnOrders = [];

                orders.forEach(function (order, i) {
                    var newOrder = order.toJSON();
                    newOrder.links = {};
                    newOrder.links.self = 'http://' + req.headers.host + '/api/orders/' + newOrder._id;
                    returnOrders.push(newOrder);
                });

                res.json(returnOrders);
            }
        });
    };

    var post = function post(req, res) {

        var order = new Order(req.body);
        console.log(order);

        if (!req.body.customer) {
            res.status(400);
            res.send('customer required');
        } else {

            order.save();
            res.status(200);
            res.send(order);
        }
    };

    return { get: get, post: post };
};

module.exports = orderController;
//# sourceMappingURL=orderController.js.map