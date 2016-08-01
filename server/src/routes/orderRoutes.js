/**
 * Created by lejoss on 7/30/16.
 */

import express from 'express'
import orderController from '../controllers/orderController'

const routes = (Order) => {

    const orderRouter = express.Router()
    const orderCtrl   = orderController(Order)

    orderRouter.route('/')
        .post(orderCtrl.post)
        .get(orderCtrl.get)

    orderRouter.use('/:orderId', (req, res, next) => {
        Order.findById(req.params.orderId, (err, order) => {
            if (err) {
                res.status(500).send(err)
            } else if (order) {
                req.order = order
                next()
            } else {
                res.status(404).send('no order found')
            }
        })
    })

    orderRouter.route('/:orderId')
        .get((req, res) => {
            let returnOrder = req.order.toJSON()

            returnOrder.links = {}
            res.json(returnOrder)
        })

    return orderRouter
}

module.exports = routes