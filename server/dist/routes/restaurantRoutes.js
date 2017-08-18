'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _restaurantController = require('../controllers/restaurantController');

var _restaurantController2 = _interopRequireDefault(_restaurantController);

var _upload = require('../config/upload');

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(Restaurant) {

    var restaurantRouter = _express2.default.Router();
    var restaurantCtrl = (0, _restaurantController2.default)(Restaurant);

    /* find a better solution for uploading files in a form.
     * this is middleware example for upload using multer
     * */
    restaurantRouter.use('/upload', function (req, res, next) {
        (0, _upload2.default)(req, res, function (err) {
            if (err) {
                res.end('Error uploading file.');
            }
            res.end('File uploaded.');
        });
    });

    restaurantRouter.route('/').post(restaurantCtrl.post).get(restaurantCtrl.get);

    restaurantRouter.use('/:restaurantId', function (req, res, next) {
        Restaurant.findById(req.params.restaurantId, function (err, restaurant) {
            if (err) {
                res.status(500).send(err);
            } else if (restaurant) {
                req.restaurant = restaurant;
                next();
            } else {
                res.status(404).send('no restaurant found');
            }
        });
    });

    restaurantRouter.route('/:restaurantId').get(function (req, res) {
        var returnRestaurant = req.restaurant.toJSON();

        returnRestaurant.links = {};
        res.json(returnRestaurant);
    });

    return restaurantRouter;
}; /**
    * Created by lejoss on 7/28/16.
    */

module.exports = routes;
//# sourceMappingURL=restaurantRoutes.js.map