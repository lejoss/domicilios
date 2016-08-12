/**
 * Created by lejoss on 7/28/16.
 */

import express from 'express'
import restaurantController from '../controllers/restaurantController'
import upload from '../config/upload'

const routes = (Restaurant) => {

    const restaurantRouter = express.Router()
    const restaurantCtrl   = restaurantController(Restaurant)

    /* find a better solution for uploading files in a form.
     * this is middleware example for upload using multer
     * */
    restaurantRouter.use('/upload', (req, res, next) => {
        upload(req, res, (err) => {
            if (err) {
                res.end('Error uploading file.')
            }
            res.end('File uploaded.')
        })
    })

    restaurantRouter.route('/')
        .post(restaurantCtrl.post)
        .get(restaurantCtrl.get)

    restaurantRouter.use('/:restaurantId', (req, res, next) => {
        Restaurant.findById(req.params.restaurantId, (err, restaurant) => {
            if (err) {
                res.status(500).send(err)
            } else if (restaurant) {
                req.restaurant = restaurant
                next()
            } else {
                res.status(404).send('no restaurant found')
            }
        })
    })

    restaurantRouter.route('/:restaurantId')
        .get((req, res) => {
            let returnRestaurant = req.restaurant.toJSON()

            returnRestaurant.links ={}
            res.json(returnRestaurant)
        })

    return restaurantRouter
}

module.exports = routes