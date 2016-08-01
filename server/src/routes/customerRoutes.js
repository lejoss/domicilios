/**
 * Created by lejoss on 7/30/16.
 */

import express from 'express'
import customerController from '../controllers/customerController'

const routes = (Customer) => {

    const customerRouter = express.Router()
    const customerCtrl   = customerController(Customer)

    customerRouter.route('/')
        .post(customerCtrl.post)
        .get(customerCtrl.get)

    customerRouter.use('/:customerId', (req, res, next) => {
        Customer.findById(req.params.customerId, (err, customer) => {
            if (err) {
                res.status(500).send(err)
            } else if (customer) {
                req.customer = customer
                next()
            } else {
                res.status(404).send('no customer found')
            }
        })
    })

    customerRouter.route('/:customerId')
        .get((req, res) => {
            let returnCustomer = req.customer.toJSON()

            returnCustomer.links ={}
            res.json(returnCustomer)
        })

    return customerRouter
}

module.exports = routes