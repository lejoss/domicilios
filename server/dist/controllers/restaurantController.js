'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param (Mongoose Object)
 * */
var restaurantController = function restaurantController(Restaurant) {

    var get = function get(req, res) {

        Restaurant.find(function (err, restaurants) {
            if (err) {
                res.status(500).send(err);
            } else {

                var returnRestaurants = [];

                restaurants.forEach(function (restaurant, i) {
                    var newRestaurant = restaurant.toJSON();
                    newRestaurant.links = {};
                    newRestaurant.links.self = 'http://' + req.headers.host + '/api/restaurants/' + newRestaurant._id;
                    returnRestaurants.push(newRestaurant);
                });
                res.json(returnRestaurants);
            }
        });
    };

    var post = function post(req, res) {

        var restaurant = new Restaurant(req.body);

        if (!req.body.name) {
            res.status(400);
            res.send('Restaurant name required');
        } else {
            restaurant.save();
            res.status(200);
            res.send(restaurant);
        }
    };

    return { get: get, post: post };
};

module.exports = restaurantController;
//# sourceMappingURL=restaurantController.js.map