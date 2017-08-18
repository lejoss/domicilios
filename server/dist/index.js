'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _restaurantModel = require('./models/restaurantModel');

var _restaurantModel2 = _interopRequireDefault(_restaurantModel);

var _restaurantRoutes = require('./routes/restaurantRoutes');

var _restaurantRoutes2 = _interopRequireDefault(_restaurantRoutes);

var _orderModel = require('./models/orderModel');

var _orderModel2 = _interopRequireDefault(_orderModel);

var _orderRoutes = require('./routes/orderRoutes');

var _orderRoutes2 = _interopRequireDefault(_orderRoutes);

var _customerModel = require('./models/customerModel');

var _customerModel2 = _interopRequireDefault(_customerModel);

var _customerRoutes = require('./routes/customerRoutes');

var _customerRoutes2 = _interopRequireDefault(_customerRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 5555;

// router middleware
var restaurantRouterMiddleware = (0, _restaurantRoutes2.default)(_restaurantModel2.default);
var customerRouterMiddleware = (0, _customerRoutes2.default)(_customerModel2.default);
var orderRouterMiddleware = (0, _orderRoutes2.default)(_orderModel2.default);

var db = void 0;

db = _mongoose2.default.connect('mongodb://localhost/deliveryAPI');

app.use(_bodyParser2.default.urlencoded({
	extended: true
}));
app.use(_bodyParser2.default.json());

// resources
app.use('/api/restaurants', restaurantRouterMiddleware);
app.use('/api/customers', customerRouterMiddleware);
app.use('/api/orders', orderRouterMiddleware);

// root
app.use((0, _cors2.default)());
app.get('/', function (req, res) {
	console.log('Welcome to my App');
	res.send('Express Home');
});

app.listen(port, function () {
	return console.log('Server running on ' + port);
});

module.exports = app;
//# sourceMappingURL=index.js.map