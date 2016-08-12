import fs from 'fs'

/**
 * @param (Mongoose Object)
 * */
const restaurantController = (Restaurant) => {

    const get = (req, res) => {


        Restaurant.find((err, restaurants) => {
            if (err){
                res.status(500).send(err)
            } else {

                let returnRestaurants = []

                restaurants.forEach((restaurant, i) => {
                    let newRestaurant = restaurant.toJSON()
                    newRestaurant.links = {}
                    newRestaurant.links.self =  'http://' + req.headers.host + '/api/restaurants/' + newRestaurant._id
                    returnRestaurants.push(newRestaurant)
                })
                res.json(returnRestaurants)
            }
        })
    }

    const post = (req, res) => {

        let restaurant = new Restaurant(req.body)

        if (!req.body.name) {
            res.status(400)
            res.send('Restaurant name required')
        } else {
            restaurant.save()
            res.status(200)
            res.send(restaurant)
        }
    }

    return { get, post }
}

module.exports = restaurantController

