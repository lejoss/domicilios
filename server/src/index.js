

import express          from 'express'
import mongoose         from 'mongoose'
import bodyParser       from 'body-parser'
import Restaurant       from './models/restaurantModel'
import restaurantRouter from './routes/restaurantRoutes'
import Order            from './models/orderModel'
import orderRouter      from './routes/orderRoutes'
import Customer         from './models/customerModel'
import customerRouter   from './routes/customerRoutes'

const app    = express()
const port   = process.env.PORT || 5555;

// router middleware
const restaurantRouterMiddleware = restaurantRouter(Restaurant)
const customerRouterMiddleware   = customerRouter(Customer)
const orderRouterMiddleware      = orderRouter(Order)

let db;

db = mongoose.connect('mongodb://localhost/deliveryAPI');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// resources
app.use('/api/restaurants', restaurantRouterMiddleware)
app.use('/api/customers', customerRouterMiddleware)
app.use('/api/orders', orderRouterMiddleware)

// root
app.get('/', (req, res) => {
    console.log('Welcome to my App');
    res.send('Express Home');
});

app.listen(port, () => console.log(`Server running on ${port}`))

module.exports = app
